import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private elasticSearchUrl = 'http://bwt-2f-0258:9200/_search';  // URL to web api
  //private elasticSearchUrl = 'http://lfkqbwtweb03:9200/_search';  // URL to web api
  private elasticSearchUrl = 'http://localhost:9200/_search';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }



  getResults(searchTerm, categoryObjects?, searchByArray?, searchFromArray?, category1Array?, category2Array?, category3Array?, category4Array?, category5Array?, category6Array?, category7Array?, category8Array?) {
    var fieldArray = ["file.filename", "meta.title", "meta.author", "content", "_index"];
    var indexArray = ["plantdrawings", "scanneddocs", "scada", "permits"];
    var categoryArray = ["Newtown Creek", "Wards Island", "BEC Permits"];
    // var indexArray =  ["lfkbwtfeng_plant_drawings", "bwt-apps2_ii-commonfiles", "lfkbwtfeng_asset_mgmt_planning"];

    //If search by array has values inside then set this for the body of the post.
    if (searchByArray != null) {
      fieldArray = searchByArray.map(i => i.value);
    }
    //If search from array has values inside then set this for the body of the post.
    if (searchFromArray != null) {
      indexArray = searchFromArray.map(i => i.value);
    }
    //If category array has values inside then set this for the category of the more like this query.
    if (categoryObjects != null) {
      categoryArray = categoryObjects.map(i => i.value);
    }

    var body: any = {
      "from": 0,
      "size": 100,
      "query": {
        "bool": {
          "must": [
            {
              "terms": {
                "_index": indexArray
              }
            },
            {
              "multi_match": {
                "query": searchTerm,
                "fields": fieldArray
              }
            }
          ]
        }
      }
    };

    var shouldArray = [];
    var mustArray = [];

    // Set the should object.
    if (categoryObjects != null) {
      for (var i = 0; i < categoryArray.length; i++) {
        var likeExampleArray = this.getLikeExampleByCategory(categoryArray[i]);
        for (var j = 0; j < likeExampleArray.length; j++) {
          var shouldObject = {
            "more_like_this": {
              "fields": [
                "content", "category"
              ],
              "like": likeExampleArray[j].text,
              "min_term_freq": 1,
              "max_query_terms": 20
            }
          };
          shouldArray.push(shouldObject);
        }
        var phraseExampleArray = this.getPhraseByCategory(categoryArray[i]);
        for (var k = 0; k < phraseExampleArray.length; k++) {
          mustArray.push({
            match_phrase: { content: phraseExampleArray[k].phrase }
          });
        }
      }
    }
    body.query.bool.should = shouldArray;
    body.query.bool.must = body.query.bool.must.concat(mustArray);

    return this.http.post(this.elasticSearchUrl, body, this.httpOptions).pipe(
      tap((result) => console.log(result)),
      catchError(this.handleError('addHero'))
    );
  }

  getLikeExampleByCategory(chosenCategory) {
    var documentArray = [];

    switch (chosenCategory) {
      case "Newtown Creek": {
        documentArray = [{ text: "Service Request Protocol for System-Wide SCADA Communication Problems 1. NOTIFICATION The Newtown Creek Communication Center (“BWTCC”) is to report the SCADA problem to the service contractor xxxxxxxxx and by emailxxxxxxxxxx and copy BWTSCADAPROBLEMS@dep.nyc.gov. See Attachment 1 (“Email Notification Template”) for the information that is to be included in the email. The BWTSCADAPROBLEMS@dep.nyc.gov email group includes: 2. RESPONSE Contractor is to respond to the BWTCC email (and copy the email group) acknowledging the service request and that the problem will be investigated/assessed remotely. CONTRACTOR proceeds as follows after the investigation/assessment is completed: 2.a If the problem is Site Specific For example: · No communication with a particular location; · instrument malfunction at a particular location; · Operational or DWB alarm form particular location due to instrument malfunction; · Not able to access the system because of a problem with a particular workstation; CONTRACTORis the Responsible Party and sends an email to BWTCC (and copies the email group) that the issue will be addressed by CONTRACTOR per the response times in the contract. 2.b. If the problem IS System wide related to the DEP Network, Verizon, AT&T or NYCWiN For example: · Wholesale outage of multiple locations (at least 1/3 of PS or regulators not communicating); · Substantial deterioration of the System performance; · Not being able to acknowledge/clear alarms; CONTRACTOR sends an email to BWTCC (and copies the email group) that the issue needs to be addressed by DEP.MIS (xxxxxxxxx, or designee)is the Responsible Party who calls and emails the OIT Helpdesk to report the problem and initiate an investigation/resolution. 3. UPDATES / CLOSE-OUT The Responsible Party is to send updates every 2-hoursto BWTCC and the email group as the investigation/assessment progresses, efforts are underway to correct the problem and, once the problem is resolved, sends an email confirming that the issue is closed-out. NOTE: Periodic updates by the Responsible Party are necessary to ensure management and operations are fully aware of the steps being taken and to determine if other measures need to be taken, e.g., Collection Field Crews may need to schedule site visits to the affected location(s) until the problem is resolved.PW-088---re: Final Report on GBT Operation at Newtown Creek From Atieh, Bryan To Palmer, Shanna Cc Como, Brian; Ma, Yuklong; Chin, Larry (BWT); Chen, Li Quan Recipients spalmer@dep.nyc.gov; BComo@hazenandsawyer.com; MaY@dep.nyc.gov; lchin@dep.nyc.gov; ChenL@dep.nyc.gov Shanna, Yuklong, and Li Quan, As discussed yesterday, please find the updated draft report attached. I made the edits discussed, but did not revise the economic analysis since the $0.08/KWH unit cost I based it on was validated by the NC energy data transmitted this morning.   Please provide any additional review comments so I can finalize and transmit the final report this Friday. When I transmit the final report, I’ll include the Word and Excel files as requested.   Regards, Bryan   Bryan Atieh, PE 212 539-7013   From: Atieh, Bryan Sent: Monday, April 10, 2017 10:07 AM To: 'Palmer, Shanna' <spalmer@dep.nyc.gov> Cc: Como, Brian <BComo@hazenandsawyer.com>; Ma, Yuklong <MaY@dep.nyc.gov>; Chin, Larry (BWT) <lchin@dep.nyc.gov> Subject: RE: PW-088---re: Final Report on GBT Operation at Newtown Creek   Good Morning Shanna, Please find the report attached, I’ll bring 6 hardcopies to our meeting.   Thanks, Bryan   Bryan Atieh, PE 212 539-7013   From: Palmer, Shanna [mailto:spalmer@dep.nyc.gov] Sent: Monday, April 10, 2017 9:49 AM To: Atieh, Bryan <BAtieh@hazenandsawyer.com> Cc: Como, Brian <BComo@hazenandsawyer.com>; Ma, Yuklong <MaY@dep.nyc.gov>; Chin, Larry (BWT) <lchin@dep.nyc.gov> Subject: RE: PW-088---re: Final Report on GBT Operation at Newtown Creek   Good Morning Bryan,   Just a reminder to submit the final report this morning for review prior to this evening’s meeting.   Thank you.   Shanna   From: Atieh, Bryan [mailto:BAtieh@hazenandsawyer.com] Sent: Friday, April 07, 2017 7:57 AM To: Palmer, Shanna <spalmer@dep.nyc.gov>; Chin, Larry (BWT) <lchin@dep.nyc.gov> Cc: Como, Brian <BComo@hazenandsawyer.com>; Ma, Yuklong <MaY@dep.nyc.gov> Subject: RE: PW-088---re: Final Report on GBT Operation at Newtown Creek   OK. Will do.   Thanks, Bryan   Bryan Atieh, PE 212 539-7013   From: Palmer, Shanna [mailto:spalmer@dep.nyc.gov] Sent: Friday, April 07, 2017 7:54 AM To: Atieh, Bryan <BAtieh@hazenandsawyer.com>; Chin, Larry (BWT) <lchin@dep.nyc.gov> Cc: Como, Brian <BComo@hazenandsawyer.com>; Ma, Yuklong <MaY@dep.nyc.gov> Subject: RE: PW-088---re: Final Report on GBT Operation at Newtown Creek   Good morning Bryan,   Please submit the document as early as possible on Monday, so that Project Development can review it and have comments by the time we meet in the evening.   Thank you for your cooperation.   Shanna   From: Atieh, Bryan [mailto:BAtieh@hazenandsawyer.com] Sent: Thursday, April 06, 2017 4:32 PM To: Chin, Larry (BWT) <lchin@dep.nyc.gov> Cc: Palmer, Shanna <spalmer@dep.nyc.gov>; Como, Brian <BComo@hazenandsawyer.com> Subject: RE: PW-088---re: Final Report on GBT Operation at Newtown Creek   Larry, I will transmit the final report on Monday April 10th.   Regards,   Bryan Atieh, PE 212 539-7013   From: Chin, Larry (BWT) [mailto:lchin@dep.nyc.gov] Sent: Tuesday, April 04, 2017 3:07 PM To: Atieh, Bryan <BAtieh@hazenandsawyer.com> Cc: Palmer, Shanna <spalmer@dep.nyc.gov>; Como, Brian <BComo@hazenandsawyer.com> Subject: PW-088---re: Final Report on GBT Operation at Newtown Creek   Bryan   Has H&S completed preparation of the final report on the GBT?  Pleaseforwardthisreport. Pleaseadvise. Thankyou.Larry Chin (BWT)   From: Chin, Larry (BWT) Sent: Wednesday, March 29, 2017 4:12 PM To: 'BAtieh@hazenandsawyer.com' <BAtieh@hazenandsawyer.com> Subject: FW: Data for GBT at Newtown Creek   Bryan   Done. I did transmit with the Wednesday, March 29, 2017 3:35 PM e-mail I just sent you today. your reaction upon seeing them follows:   From: Atieh, Bryan [mailto:BAtieh@hazenandsawyer.com] Sent: Wednesday, March 29, 2017 3:40 PM To: Chin, Larry (BWT) <lchin@dep.nyc.gov> Cc: Ma, Yuklong <MaY@dep.nyc.gov>; Palmer, Shanna <spalmer@dep.nyc.gov>; Sexton, John <jsexton@dep.nyc.gov>; Farrell, Abigail <afarrell@hazenandsawyer.com>; Como, Brian <BComo@hazenandsawyer.com> Subject: RE: Data for GBT at Newtown Creek   I haven’t seen those spreadsheets.   Thanks for sending them.   Bryan Atieh, PE 212 539-7013 From: Atieh, Bryan [mailto:BAtieh@hazenandsawyer.com] Sent: Wednesday, March 29, 2017 4:08 PM To: Chin, Larry (BWT) <lchin@dep.nyc.gov> Subject: RE: Data for GBT at Newtown Creek   It wasn’t received. Please forward it.   Bryan Atieh, PE 212 539-7013 From: Chin, Larry (BWT) [mailto:lchin@dep.nyc.gov] Sent: Wednesday, March 29, 2017 4:05 PM To: Atieh, Bryan <BAtieh@hazenandsawyer.com> Subject: RE: Data for GBT at Newtown Creek" }];
        break;
      }
      case "Wards Island": {
        documentArray = [{ text: "APPENDIX A SCOPE OF WORK Appendix_A-USFILTER_ENV715CHAIN A1 1. THE SCOPE OF TEST: The Company shall provide ENV715 stainless steel collector chain for testing in each of the following locations and applications: a. Two (2) long collector passes at a Final Settling Tank (influent side) at the Wards Island WPCP; b. One (1) cross collector at a Final Settling Tank at the Wards Island WPCP. 2. EQUIPMENT: The Company is to provide its ENV715 403 stainless steel collector chain in quantities and configurations as follow: a. One (1) complete pass, approximately five hundred (500) feet of long collector with F226 attachment link for the Wards Island WPCP; b. One (1) partial pass, approximately five hundred (250) feet of long collector with F226 attachment link to be interlaced with existing chain for the Wards Island WPCP; c. One (1) complete cross collector, approximately six hundred forty (500) feet of cross collector with F226 attachment link for the Wards Island WPCP. d. All chain shall use 300 series stainless steel J cotters, which shall be provided to connect chains. In addition, eighteen (18) sets of new 23-teeth sprockets segments, with pitch diameter of 22.21”. A set shall compose of three segments having 8, 8, and 7 teeth. They shall be drilled to fit on existing hubs and complete with 316 stainless steel hardware. The segments shall be 1” wide UHMW cross-linked polyethylene and shall be compatible with the 715 class of collector chain. Sprocket segments shall be machined and manufactured by Brewton Iron Works. The Company must supply certified reports on the source of the material and test analyses. Detailed drawings and description of test chains and accessories shall also be provided. 3. PERSONNEL: The NYC-DEP is to provide personnel to mechanically install the chain and the Company is to provide the personnel to supervise and approve the installation of the chains. APPENDIX A SCOPE OF WORK Appendix_A-USFILTER_ENV715CHAIN A2 4. TEST OBJECTIVES: a. Determine the mechanical capability of the chain in the installed location; b. Determine susceptibility of the unit to physical and/or chemical damage typical of the location’s service and environment. 5. TEST PROCEDURES: a. Chain is to be off loaded by the Company under supervision by NYC-DEP personnel; b. Chain shall be inspected by the Company and the NYC-DEP before installation by NYC-DEP personnel; c. The chain shall be operated according to the system=s standard process and procedure demands; d. Test duration is as set forth in Article 6.1 of the Agreement; e. The NYC-DEP may tighten the chain, replace wear shoes, and other miscellaneous items in the tank during the test period for maintenance. This change will not void any of the test criteria; f. The equipment shall be inspected at the conclusion of service; g. The manufacturer may not visit the test facility without coordinating the visit with the Engineer from the Bureau of Wastewater Treatment=s Project Development Section. Any inspection of the equipment without such coordination is grounds for the equipment=s failure. 6. DATA COLLECTED, EVALUATED, ETC.: a. After the test, the NYC-DEP shall evaluate the chain and issue a report. A formal evaluation shall be received by the Company from the NYC-DEP; b. The Company may visit the site to inspect the unit while in service by an appointment with the NYC-DEP Engineer identified in Article 8 of the Agreement or at the request of the Engineer; c. The Company will be notified of the final inspection at least two weeks before this inspection is done. The Company may witness the final inspection. The NYC-DEP may require the manufacturer to disassemble the unit as part of the final inspection; d. The NYC-DEP will judge the unit=s ability to meet the demands of this service. The unit must not display excessive wear on any part after its service test. The unit must not experience any other form of damage or wear that indicates an impending failure including items claimed to be a manufacturing defect. The failure of any unit component during test will result in a test failure; e. The NYC-DEP may conduct any quality control analysis or test on any section or APPENDIX A SCOPE OF WORK Appendix_A-USFILTER_ENV715CHAIN A3 sections of the chain at any time during the test. Any data collected by the DEP may be used by the NYC-DEP to evaluate the performance and quality of the chain. CITY OF NEW YORK DEPARTMENT OF ENVIRONMENTAL PROTECTION BUREAU OF CLEAN WATER INTRA-DEPARTMENTAL MEMORANDUM To:Glen Vogel P.E., Deputy Commissioner Director Bureau of Environmental Engineering From:Edward O. Wagner P.E., Deputy Commissioner Director Bureau of Clean Water Subject:Items for Wrap Up Contract. The following items were the subject of change orders on various dewatering contracts. Due to the fact that substantial completion has been declared for many of the contracts, these items were never executed. We request that these items be included in a separate wrap up contract. Facility 52G: Wards Island 52G: Wards Island 52G: Wards Island 52G: Wards Island 53G: Hunts Point 54G: 26th Ward 55G:Bowery Bay 56G: Jamaica 57G: Oakwood Beach 58G: Tallman Island 53G: Hunts Point 53G: Hunts Point 53G: Hunts Point 52G: Wards Island 54G: 26th Ward 55G: Bowery Bay 56G: Jamaica 57G: Oakwood Beach 55G: Bowery Bay 56G: Jamaica 57G: Oakwood Beach 52G: Wards Island 53G: Hunts Point 54G: 26th Ward 55G:Bowery Bay 56G: Jamaica 57G:Oakwood Beach 52G: Wards Island 53G: Hunts Point 54G: 26th Ward 55G:Bowery Bay 56G: Jamaica 57G: Oakwood Beach 52G: Wards Island 53G: Hunts Point 54G: 26th Ward 55G:Bowery Bay 56G: Jamaica 57G: Oakwood Beach 58G: Tallman Island 59G: Red Hook 58G: Tallman Island 58G: Tallman Island 58G: Tallman Island 58G: Tallman Island 58G: Tallman Island 58G: Tallman Island 52G: Wards Island 53G: Hunts Point 54G: 26th Ward 55G:Bowery Bay 56G: Jamaica 57G: Oakwood Beach 58G: Tallman Island Subject Install drains on sludge transfer pumps, construct curbing in sludge and transfer pumps and modify service water system (CO 52G-95) Provide platform and steps for access to Sludge Transfer Pumps Relocate service air piping in truck loading bay (CO 52G-103) Provide flow indication for centrifuge cooling lines and bypass solenoid. Install submersible pumps in NW and NE conveyor sumps at SST-10 drain pump sump Install platforms above sludge grinders in SST #10 Provide centrifuge floor operation booth 1 air line Hopper Area to blow down cake spills on rails Service platform in TLB to access screw conveyors Wet Well Alternative Level Indication Provide permanent flushing lines on sludge and centrate pumps on pressure gauges Permanent connection of Ferric Chloride System (Struvite Control System) Egress at front gate Repair sink holes in main access road Centrifuge Panel cross connection Platform over Sludge Hopper Paint Sludge Storage Tank (CO 58G-34) Access to existing park Hanging scaffolding for washing windows Edward O. Wagner P.E., Deputy Commissioner Director Bureau of Clean Water cc:Plant Superintendent:Hunts Point, Wards Island, 26th Ward, Bowery Bay, Jamaica, Oakwood Beach, Tallman Island, Red Hook T.Pukenis, A.Lopez, K.Gopalakrishnan, R.Schultz, M.Stein, P.KrasnoffBCW J.Perry, J.Ragaglia, M.Gelfand, D.Rizzo, R.Gaffoglio, P.ZoltanetzkyBEE J.Lastihenos, R.Shapiro, R.Lane, T.Walsh, J.Brady, M.Hartman SWEC/H&S" }];
        break;
      }
      case "BEC Permits": {
        documentArray = [
          { text: "THE CITY OF NEW YORK DEPARTMENT OF ENVIRONMENTAL PROTECTION Bureau of Environmental Compliance 59-17 Junction Blvd. 9th Floor, Flushing, NY 11373 Michael GilsenanVincent Sapienza, P.E. Records Control (718) 595-3855Assistant Commissioner Environmental Compliance Acting Commissioner ENGINE/GENERATOR REGISTRATION PERMIT Business Owner Information Application ID: PB040207 NYC DEPT. OF ENV. PROTECTION 106-21 Beach Channel Drive, Rockaway, NY 11694 Issued Date: 10/19/2016 Expiration 10/19/2019 Date: Request ID: 193162 FACILITY ADDRESS:106-21 BEACH CHANNEL DRIVE, Queens, NY 11694 Equipment Information Manufacturer: Caterpillar Serial No.(s): CNB01199, CNB01200 Model: CAT 3508-B Number of Identical Units: 2 Fuel Type: No2Fuel Max. Fuel Delivery Rate (gph/cfh): 69.7 Gross Input (BTU/Hr.): 9756000 Horsepower: 1341KW Rating (If applicable): 1000 Usage Information Q2J. Primary Use: Emergency 5A. Noise Control: Muffler Average Use 5B. Hours/day: 1 5C. Hours/year: 52 The holder of this registration is responsible for the use of the equipment in accordance with all the application requirements and provisions of the New York City Air Pollution Control Code. The Commissioner may suspend or revoke this registration for willful or continued violation of the Air Code. Any purported or attempted transfer of a registration from one location to another or from one piece of equipment to another automatically revokes the registration. Section 24-135 NYC Air Pollution Code. Engineer NameSupervisor Name R. Radhakrishnan, P.E.Director of Air Engineering / For the Commissioner *DISPLAY REGISTRATION ON PREMISES NEAR EQUIPMENT*" },
          { text: "THE CITY OF NEW YORK DEPARTMENT OF ENVIRONMENTAL PROTECTION Bureau of Environmental Compliance 59-17 Junction Blvd. 9th Floor, Flushing, NY 11373 Records Control (718) 595-3855 Vincent Sapienza, P.E.Acting Commissioner	Michael Gilsenan Assistant Commissioner Environmental Compliance CERTIFICATE TO OPERATE FACILITY ADDRESS: 329 GREENPOINT AVENUE, Brooklyn, NY11222 Installation #: CB401703 Issued: 6/21/2017 Expiration: 12/31/2018 Request ID: 169129 OWNER : NYC DEPT. OF ENVIRONMENTAL PROT.(BEDC )  96-05 HORACE HARDING EXPWY 2ND FL. CORONA NY11368 Boiler Make & Model: Cleaver Brooks - CBI700-750-125-HW Number of Boiler(s): 9 Maximum Boiler Heat Input: 31.5 million BTU/hr Gross Output Rating: 25.1 million BTU/hr. Burner Make & Model: Cleaver Brooks - Integral Number of burners: 9 Fuel Type 1: Natural Gas  Fuel Type 2: None Maximum Fuel Delivery Rate: 31500 CFH Maximum Fuel Delivery Rate: None Burner Limitations: Natural gas only, No limitations Special Conditions: This permit is valid for boilers #1,#3, #4, #6 and #7. Please submit a performance test worksheet once boilers #2, #5, #8 and #9 are operational. The holder of this certificate of operation is responsible for the use of the equipment in accordance with all the applicable requirements and rovisions of the New York City Air Pollution Control Code. Violations of the Air Pollution Control Code can result in the imposition of penalties by the Environmental Control Board. This Certificate must be posted in the vicinity of the designated equipment. It may not be transferred to any other equipment. Application for Renewal of this certificate of operation must be submitted no later than ninety (90) days prior to the expiration date. R. Radhakrishnan, P.E. Director of Engineering" },
          { text: "THE CITY OF NEW YORK DEPARTMENT OF ENVIRONMENTAL PROTECTION Bureau of Environmental Compliance 59-17 Junction Blvd. 9th Floor, Flushing, NY 11373 Records Control (718) 595-3855 Vincent Sapienza, P.E. Commissioner Michael Gilsenan Assistant Commissioner Environmental Compliance CERTIFICATE TO OPERATE PREMISES ADDRESS: Rockaway WWTP, 106-21 Beach Channel Drive, Queens, NY 11694 Installation #: PB044607 Issued: 1/5/2018 OWNER Information: CITY OF N.Y./DEPT. OF ENVIR. PROTECTION, 96-05 HORACE HARDING EXP 2 FL CORONA NY 11368 Expiration: 8/6/2020 Request ID: 217603 Legalization: No Environmental Rating: B Emission Point: 1WGB Operational Hours/day: 24 Installation Type: Other Industrial Sources Equipment Type: Material Being Processed: Digester Gas Desc.: Waste gas flare 1 - Varec WG244ESE1712219PS6 Days/year: 365 Number of units: 1 ACFM/Unit: 300 Contaminant(s): Control(s): Description of Process: Waste gas flare Special Conditions: NA The holder of this certificate of operation is responsible for the use of the equipment in accordance with all the applicable requirements and provisions of the New York City Air Pollution Control Code. Violations of the Air Pollution Control Code can result in the imposition of penalties by the Environmental Control Board. This Certificate must be posted in the vicinity of the designated equipment. It may not be transferred to any other equipment. Application for Renewal of this certificate of operation must be submitted no later than ninety (90) days prior to the expiration date. *DISPLAY CERTIFICATE ON PREMISES NEAR EQUIPMENT* R. Radhakrishnan, P.E. Director of Engineering/For the Commissioner " },
          { text: "THE CITY OF NEW YORK DEPARTMENT OF ENVIRONMENTAL PROTECTION Bureau of Environmental Compliance 59-17 Junction Blvd. 9th Floor, Flushing, NY 11373 Records Control (718) 595-3855 Vincent Sapienza, P.E. Commissioner Michael Gilsenan Assistant Commissioner Environmental Compliance CERTIFICATE TO OPERATE PREMISES ADDRESS: Rockaway WWTP, 106-21 BEACH CHANNEL DRIVE, Queens, NY 11694 Installation #: PB006814 Issued: 1/5/2018 OWNER Information: City of New York Department of Environmental Prot., 96-05 Horace Harding Expwy - 2 FL CORONA NY 11368 Expiration: 6/17/2018 Request ID: 220223 Legalization: No Environmental Rating: B Emission Point: 201A Operational Hours/day: 24 Installation Type: Other Industrial Sources Equipment Type: Material Being Processed: Hydrogen Sulfide Desc.: Carbon Vessel 1 - Carbtrol G23 Days/year: 365 Number of units: 1 ACFM/Unit: 1400 Contaminant(s): Other - Hydrogen Sulfide Control(s): Carbon Adsorber Description of Process: Odor control system for the primary tanks Special Conditions: NA The holder of this certificate of operation is responsible for the use of the equipment in accordance with all the applicable requirements and provisions of the New York City Air Pollution Control Code. Violations of the Air Pollution Control Code can result in the imposition of penalties by the Environmental Control Board. This Certificate must be posted in the vicinity of the designated equipment. It may not be transferred to any other equipment. Application for Renewal of this certificate of operation must be submitted no later than ninety (90) days prior to the expiration date. *DISPLAY CERTIFICATE ON PREMISES NEAR EQUIPMENT* R. Radhakrishnan, P.E. Director of Engineering/For the Commissioner" }];
        break;
      }
    }

    return documentArray;
  }

  getPhraseByCategory(chosenPhrase) {
    var phraselistArray = [];

    switch (chosenPhrase) {
      case "BEC Permits": {
        phraselistArray = [{ phrase: "CERTIFICATE TO OPERATE" }];
        break;
      }
    }

    return phraselistArray;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/