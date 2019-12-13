import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { HighlightPipe } from './shared/highlight.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public position;
  title = 'docunex';
  result: any;
  public min = 0;
  public max = 400;
  particlesJS: any;
  test: any;
  searchTerm = "";

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
                "author": "Jane Doe",
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
          }
          /**{
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
                "filename": "Sheet 101 G-MPT-31B(A).pdf (2)",
                "url": "file://Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf" }, "path": { "root": "d9755a5bcccd6efc854eda0aaab402a", "virtual": "Contract_Drawings_Old_server/Pumping_Stations/Meadowmere_Warnerville_PS/As-Builts/Vol 1/Sheet 101 G-MPT-31B(A).pdf", "real": "Z:\\Contract_Drawings_Old_server\\Pumping_Stations\\Meadowmere_Warnerville_PS\\As-Builts\\Vol 1\\Sheet 101 G-MPT-31B(A).pdf"
              }
            }
          },*/
        ]
      }
    };
  }

  search(searchText) {
    console.log(searchText);

    this.dataService.getResults(searchText).subscribe(entity => {
      this.result = entity;
      this.searchTerm = searchText;
      console.log(this.result.length);
    });
  }

}