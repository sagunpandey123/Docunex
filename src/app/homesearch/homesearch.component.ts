import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { HighlightPipe } from '../shared/highlight.pipe';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.scss']
})
export class HomesearchComponent implements OnInit {
  title = 'docunex';
  result: any;
  searchTerm = "";

  searchByArray = new FormControl();
  searchByList: any[] = [
    { name: 'Filename', value: 'file.filename' },
    { name: 'Author', value: 'meta.author' },
    { name: 'Title', value: 'meta.title' },
    { name: 'Content', value: 'content' }
  ];

  searchFromArray = new FormControl();
  searchFromList: any[] = [
    { name: 'LFKBWTFENG Plant Drawings', value: 'plantdrawings' },
    { name: 'BWT-APPS2 II Common Files', value: 'scanneddocs' },
    { name: 'LFKBWTFENG Asset Management Planning', value: 'scada' },
    { name: 'BEC Permits', value: 'permits' }
  ];

  categoryArray = new FormControl();
  categoryList: any[] = [
    { name: '1. Newtown Creek', value: 'Newtown Creek' },
    { name: '2. Wards Island', value: 'Wards Island' },
    { name: '3. BEC Permits', value: 'BEC Permits' }
  ];

  category1Array = new FormControl();
  category1List: any[] = [
    { name: '1. Asset management', value: 'Newtown Creek' },
    { name: 'a. Condition assessment', value: 'Newtown Creek' },
    { name: 'b.	Capital prioritization', value: 'Newtown Creek' },
    { name: 'c.	Insourcing', value: 'Newtown Creek' },
    { name: 'd.	Facility Planning, Design, and CM Coordination – BEDC projects', value: '' },
    { name: 'e.	Facility Planning, Design, and CM Coordination – BWT projects', value: '' },
    { name: 'f.	Buildings and Facilities', value: '' },
    { name: 'i.	Certificate of Occupancy', value: '' },
    { name: 'ii.	Place of assembly', value: '' }
  ];

  category2Array = new FormControl();
  category2List: any[] = [
    { name: '2.	Budget', value: '' },
    { name: 'a.	Expense Budget', value: '' },
    { name: 'b.	Capital Purchases', value: '' },
    { name: 'c.	Demand Response Funds', value: '' }
  ];

  category3Array = new FormControl();
  category3List: any[] = [
    { name: '3.	Compliance', value: '' },
    { name: 'a.	Compliance Reports', value: '' },
    { name: 'b.	Permits', value: '' },
    { name: 'i.	Air permits', value: '' },
    { name: 'ii.	SPDES permits', value: '' },
    { name: 'c.	Process Data and Analysis', value: '' },
    { name: 'd.	Process Standard Operating Procedures', value: '' },
    { name: 'e.	Process Control Management Plans', value: '' },
    { name: 'f.	Process control log sheets', value: '' },
    { name: 'g.	Change Control', value: '' },
    { name: 'h.	PBS compliance', value: '' },
    { name: 'i.	CBS compliance', value: '' },
    { name: 'j.	Bureau of Environmental Control (BEC) permits', value: '' },
    { name: 'k.	FDNY compliance', value: '' }
  ];

  category4Array = new FormControl();
  category4List: any[] = [
    { name: '4.	EHS', value: '' },
    { name: 'a.	EAP', value: '' },
    { name: 'b.	Environmental Audits', value: '' },
    { name: 'c.	OEHS Audits', value: '' },
    { name: 'd.	FM Walkthroughs', value: '' }
  ];

  category5Array = new FormControl();
  category5List: any[] = [
    { name: '5.	Operations', value: '' },
    { name: 'a.	Standard Operating Procedures', value: '' },
    { name: 'b.	O&M manuals', value: '' },
    { name: 'c.	Energy management', value: '' },
    { name: 'd.	Main Sewage Pumping', value: '' },
    { name: 'e.	Continuous Improvement Program', value: '' },
    { name: 'f.	Emergency Planning', value: '' },
    { name: 'g.	Odors', value: '' },
    { name: 'h.	SCADA', value: '' },
    { name: 'i.	Sustainability', value: '' },
    { name: 'j.	Wet weather operating plans', value: '' },
    { name: 'k.	Tours and public affairs', value: '' },
    { name: 'l.	Elected officials - communications', value: '' },
    { name: 'm.	Fleet', value: '' },
    { name: 'n.	Security', value: '' },
    { name: 'o.	Bi-weekly reports', value: '' },
    { name: 'p.	Emergency equipment', value: '' },
    { name: 'q.	Innovation projects', value: '' },
    { name: 'r.	Outfalls', value: '' },
    { name: 's.	Plant photos', value: '' }
  ];

  category6Array = new FormControl();
  category6List: any[] = [
    { name: '6.	Maintenance', value: '' },
    { name: 'a.	Corrective Maintenance', value: '' },
    { name: 'b.	Preventive Maintenance', value: '' },
    { name: 'c.	Predictive Maintenance', value: '' },
    { name: 'd.	Quality of Work Life', value: '' },
    { name: 'e.	Maintenance Initiatives', value: '' },
    { name: 'f.	Maintenance planning', value: '' },
    { name: 'g.	Long Term Maintenance', value: '' },
    { name: 'h.	Maintenance Reports', value: '' }
  ];

  category7Array = new FormControl();
  category7List: any[] = [
    { name: '7.	Wastewater Resource Recovery', value: '' },
    { name: 'a.	Digester gas', value: '' },
    { name: 'b.	Water use', value: '' },
    { name: 'c.	Sewage reuse', value: '' }
  ];

  category8Array = new FormControl();
  category8List: any[] = [
    { name: '8.	Personnel', value: '' },
    { name: 'a.	Labor relations', value: '' },
    { name: 'b.	Discipline', value: '' },
    { name: 'c.	Hiring', value: '' },
    { name: 'd.	Evaluations', value: '' },
    { name: 'e.	Personnel policies', value: '' },
    { name: 'f.	Timekeeping', value: '' },
    { name: 'g.	Headcount', value: '' },
    { name: 'h.	EEO', value: '' },
    { name: 'i.	Training', value: '' },
    { name: 'j.	Employee certifications', value: '' }
  ];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.result = {
      "took": 2,
      "timed_out": false,
      "_shards": { "total": 5, "successful": 5, "skipped": 0, "failed": 0 },
      "hits": {
        "total": 9733,
        "max_score": 1.0,
        "hits": [
          {
            "_index": "plantdrawings",
            "_type":
              "doc",
            "_id": "fc78797ec33528502ec47fcc719edafd",
            "_score": 1.0,
            "_source": {
              "content": "\nM\nA\nS\nO\n\nN\n\nM\nO\n\nR\nE\nLA\n\nN\nD\n\nK\nIS\n\nW\nIC\n\nK\n\nN\nU\n\nG\nE\nN\nT\n\nG\nR\nIM\n\nS\nB\nY\n\nA\nV\nE\n.\n\nA\nV\nE\n.\n\nS\nT.\n\nS\nT.\n\nS\nT.\n\nF\nR\n\nE\nE\nB\nO\n\nR\nN\n\nO\nLY\n\nM\nP\nIA\n\nC\nO\n\nLO\nN\n\nY\n\nS\nT.\n\nA\nV\nE\n.\n\nA\nV\nE\n.\n\nB\nA\nD\n\nE\nN\n\nP\nL.\n\nP\nA\nT\nT\nE\nR\n\nS\nO\n\nN\n\nA\nV\nE\n.\n\nS\nE\nA\nS\nID\n\nE\n\nA\nV\nE\n.\n\nO\nLD\n\nF\nIE\n\nLD\n\nP\nO\n\nU\nLT\n\nN\nE\nY\n\nR\nU\n\nD\nY\nA\nR\n\nD\n\nS\nA\nN\n\nIL\nA\nCB\nO\n\nU\nN\n\nD\nA\nR\n\nY\n\nS\nT.\n\nS\nT.\n\nS\nT.\n\nH\nY\nLA\n\nN\n\nB\nLV\n\nD\n.\n\nH\nY\nLA\n\nN\n\nG\nR\nA\nN\n\nT\n\nP\nL.\n\nC\nLA\n\nW\nS\nO\n\nN\n\nS\nT.\n\nH\nU\n\nS\nS\nO\n\nN\n\nLA\nC\n\nO\nN\n\nIA\n\nH\nA\nV\nE\nN\n\n \n \n\nA\nV\nE\n.\n\nM\nE\nA\nD\n\nO\nW\n\n P\nL.\n\nA\nV\nE\n.\n\nJO\nY\nC\nE\n\nV\nE\nR\nA\n\nST\nAT\n\nEN\n \n\n \n \n\n \n \n\nIS\nLA\n\nN\nD\n \n\n \n \n\n \n \n\nR\nAI\n\nLW\nA\nY\n\nW\nA\nLN\n\nU\nT\n S\n\nT.\n\nE\nD\nIS\n\nO\nN\n\nS\nT.\n\nB\nO\n\nW\nD\nEN\n\nC\nA\nS\nC\nA\nD\nES\n\nT.\n\nS\nT.\n\nR\nO\n\nS\nE\nM\n\nA\nR\n\nK\nA\nV\nE\n.\n\nIG\nLE\n\nA\nS\nE\n P\n\nL.\n\nJA\nY\n S\n\nT\n.\n\nU. S. GOVERNM\nENT\n\nAVIATION FILED\n\nF\nR\n\nA\nN\n\nK\nLI\n\nN\n D\n\n.\n\nR\nO\n\nO\nS\nE\nV\nE\nLT\n\n B\nE\nA\nC\n\nH\n\nSLATER\n\nSEAVER\n\nBLVD.\n\nAVE.\n\nDO\nNG\n\nAN HILLS\n\nAVE.\n\nAVE.\n\nAVE.\n\nFILBERT\n\nAVE.\n\nR\nO\n\nW\nAN AVE.\n\nGRAHAM\n\nBLVD.\n\nROW\nAN\n\nAVE.\n\nADAM\nS\n\nAVE.\n\nH\nU\nLL\n\nHUNTER\n\nHAM\nDEN\n\nBEDFORD\n\nM\nIDLAND\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nM\nAPLETO\n\nN\n\nAVE.\n\nCOLFAX\n\nLINCOLN\n\nFREM\nONT\n\nGREELEY\n\nPRESCO\nTT\n\nBRYANT\n\nELM\nTREE\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE",
              "meta": {
                "author": "curryj",
                "title": "U:\\E-Mail, Correspondence Etc\\Curry\\06-23-200C - Meadowmere As-Builts\\Working As-Builts\\AS-BUILT\\Warnerville AutoCad\\MAINTENANC",
                "date": "2012-05-10T23:02:01.000+0000",
                "format": "application/pdf; version=1.4",
                "creator_tool": "PScript5.dll Version 5.2.2",
                "created": "2012-05-10T23:02:01.000+0000"
              },
              "file": {
                "extension": "pdf",
                "content_type": "application/pdf",
                "last_modified": "2012-05-10T19:02:02.000+0000",
                "indexing_date": "2019-07-31T15:24:25.661+0000",
                "filesize": 198608,
                "filename": "Sheet 101 G-MPT-31B(A).pdf",
                "url": "file://Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf"
              }, "path": {
                "root": "d9755a5bcccd6efc854eda0aaab402a", "virtual": "Contract_Drawings_Old_server/Pumping_Stations/Meadowmere_Warnerville_PS/As-Builts/Vol 1/Sheet 101 G-MPT-31B(A).pdf", "real": "Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf"
              }
            }
          },
          {
            "_index": "plantdrawings",
            "_type":
              "doc",
            "_id": "fc78797ec33528502ec47fcc719edafd",
            "_score": 1.0,
            "_source": {
              "content": "\nM\nA\nS\nO\n\nN\n\nM\nO\n\nR\nE\nLA\n\nN\nD\n\nK\nIS\n\nW\nIC\n\nK\n\nN\nU\n\nG\nE\nN\nT\n\nG\nR\nIM\n\nS\nB\nY\n\nA\nV\nE\n.\n\nA\nV\nE\n.\n\nS\nT.\n\nS\nT.\n\nS\nT.\n\nF\nR\n\nE\nE\nB\nO\n\nR\nN\n\nO\nLY\n\nM\nP\nIA\n\nC\nO\n\nLO\nN\n\nY\n\nS\nT.\n\nA\nV\nE\n.\n\nA\nV\nE\n.\n\nB\nA\nD\n\nE\nN\n\nP\nL.\n\nP\nA\nT\nT\nE\nR\n\nS\nO\n\nN\n\nA\nV\nE\n.\n\nS\nE\nA\nS\nID\n\nE\n\nA\nV\nE\n.\n\nO\nLD\n\nF\nIE\n\nLD\n\nP\nO\n\nU\nLT\n\nN\nE\nY\n\nR\nU\n\nD\nY\nA\nR\n\nD\n\nS\nA\nN\n\nIL\nA\nCB\nO\n\nU\nN\n\nD\nA\nR\n\nY\n\nS\nT.\n\nS\nT.\n\nS\nT.\n\nH\nY\nLA\n\nN\n\nB\nLV\n\nD\n.\n\nH\nY\nLA\n\nN\n\nG\nR\nA\nN\n\nT\n\nP\nL.\n\nC\nLA\n\nW\nS\nO\n\nN\n\nS\nT.\n\nH\nU\n\nS\nS\nO\n\nN\n\nLA\nC\n\nO\nN\n\nIA\n\nH\nA\nV\nE\nN\n\n \n \n\nA\nV\nE\n.\n\nM\nE\nA\nD\n\nO\nW\n\n P\nL.\n\nA\nV\nE\n.\n\nJO\nY\nC\nE\n\nV\nE\nR\nA\n\nST\nAT\n\nEN\n \n\n \n \n\n \n \n\nIS\nLA\n\nN\nD\n \n\n \n \n\n \n \n\nR\nAI\n\nLW\nA\nY\n\nW\nA\nLN\n\nU\nT\n S\n\nT.\n\nE\nD\nIS\n\nO\nN\n\nS\nT.\n\nB\nO\n\nW\nD\nEN\n\nC\nA\nS\nC\nA\nD\nES\n\nT.\n\nS\nT.\n\nR\nO\n\nS\nE\nM\n\nA\nR\n\nK\nA\nV\nE\n.\n\nIG\nLE\n\nA\nS\nE\n P\n\nL.\n\nJA\nY\n S\n\nT\n.\n\nU. S. GOVERNM\nENT\n\nAVIATION FILED\n\nF\nR\n\nA\nN\n\nK\nLI\n\nN\n D\n\n.\n\nR\nO\n\nO\nS\nE\nV\nE\nLT\n\n B\nE\nA\nC\n\nH\n\nSLATER\n\nSEAVER\n\nBLVD.\n\nAVE.\n\nDO\nNG\n\nAN HILLS\n\nAVE.\n\nAVE.\n\nAVE.\n\nFILBERT\n\nAVE.\n\nR\nO\n\nW\nAN AVE.\n\nGRAHAM\n\nBLVD.\n\nROW\nAN\n\nAVE.\n\nADAM\nS\n\nAVE.\n\nH\nU\nLL\n\nHUNTER\n\nHAM\nDEN\n\nBEDFORD\n\nM\nIDLAND\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE.\n\nM\nAPLETO\n\nN\n\nAVE.\n\nCOLFAX\n\nLINCOLN\n\nFREM\nONT\n\nGREELEY\n\nPRESCO\nTT\n\nBRYANT\n\nELM\nTREE\n\nAVE.\n\nAVE.\n\nAVE.\n\nAVE",
              "meta": {
                "author": "curryj",
                "title": "U:\\E-Mail, Correspondence Etc\\Curry\\06-23-200C - Meadowmere As-Builts\\Working As-Builts\\AS-BUILT\\Warnerville AutoCad\\MAINTENANC",
                "date": "2012-05-10T23:02:01.000+0000",
                "format": "application/pdf; version=1.4",
                "creator_tool": "PScript5.dll Version 5.2.2",
                "created": "2012-05-10T23:02:01.000+0000"
              },
              "file": {
                "extension": "pdf",
                "content_type": "application/pdf",
                "last_modified": "2012-05-10T19:02:02.000+0000",
                "indexing_date": "2019-07-31T15:24:25.661+0000",
                "filesize": 198608,
                "filename": "Example 2",
                "url": "file://Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf"
              }, "path": {
                "root": "d9755a5bcccd6efc854eda0aaab402a", "virtual": "Contract_Drawings_Old_server/Pumping_Stations/Meadowmere_Warnerville_PS/As-Builts/Vol 1/Sheet 101 G-MPT-31B(A).pdf", "real": "Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf"
              }
            }
          },
        ]
      }
    };

  }

  search(searchText) {
    console.log(searchText);
    console.log(this.categoryArray.value);
    console.log(this.searchByArray.value);
    console.log(this.searchFromArray.value);
    this.dataService.getResults(searchText, this.categoryArray.value, this.searchByArray.value, this.searchFromArray.value).subscribe(entity => {
      this.result = entity;
      this.searchTerm = searchText;
      console.log(this.result);
    });
  }

  //search1(searchText) {
  // console.log(searchText);
  // console.log(this.categoryArray.value);
  //console.log(this.category1Array.value);
  //console.log(this.category2Array.value);
  //console.log(this.category3Array.value);
  //console.log(this.category4Array.value);
  //console.log(this.category5Array.value);
  //console.log(this.category6Array.value);
  //console.log(this.category7Array.value);
  //console.log(this.category8Array.value);
  //this.dataService.getMLTResults(searchText, this.categoryArray.value).subscribe(entity => {
  // this.result = entity;
  // this.searchTerm = searchText;
  // console.log(this.result);
  // });
  // }
}