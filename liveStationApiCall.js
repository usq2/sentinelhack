//get data from railway api
var https = require('https');
var url = "https://api.railwayapi.com/v2/live/train/12295/date/09-11-2018/apikey/287ad736el/";
//using get
/*var request = https.get(url,(res) => {
    var buffer = "", 
        data,
        route;
        console.log('statusCode : ', res.statusCode);
    res.on("data",(chunk)=> {
        buffer += chunk;
     
    }); 

    res.on("end",(err) =>{
        //console.log(buffer);
        //console.log("\n");
        data = JSON.parse(buffer);
        route = data.route[0];
        console.log("Late in minutes" + data.route.text);
        //console.log("Time: " + route.legs[0].duration.text);
    }); 
});*/
var array =
{"route": [
{"has_departed": true, "actdep": "09:04", "schdep": "09:00", "day": 0, "distance": 0, "actarr": "00:00", "actarr_date": "9 Nov 2018", "scharr": "Source", "latemin": 0, "status": "0 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "SBC", "name": "KSR BENGALURU", "lat": 13.06178495, "lng": 77.6102415504026}
},
 {"has_departed":true, "actdep": "09:19", "schdep": "09:12", "day": 0, "distance": 4, "actarr": "09:17", "actarr_date": "9 Nov 2018", "scharr": "09:10", "latemin": 7, "status": "7 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "BNC", "name": "BANGALORE CANT", "lat": 12.9791198, "lng": 77.5912997}
 }, 
 {
"has_departed": true, "actdep": "09:41", "schdep": "09:23", "day": 0, "distance": 14, "actarr": "09:39", "actarr_date": "9 Nov 2018", "scharr": "09:21", "latemin": 18, "status": "18 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "KJM", "name": "KRISHNARAJAPURM", "lat": 13.0005672, "lng": 77.6746456}
},
  {"has_departed": true, "actdep": "10:31", "schdep": "10:10", "day": 0, "distance": 70, "actarr": "10:26", "actarr_date": "9 Nov 2018", "scharr": "10:08", "latemin": 18, "status": "18 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "BWT", "name": "BANGARAPET", "lat": 12.9227564, "lng": 78.2271900485709}
  }, 
  {"has_departed": true, "actdep": "11:00", "schdep": "10:38", "day": 0, "distance": 105, "actarr": "10:58", "actarr_date": "9 Nov 2018", "scharr": "10:36", "latemin": 22, "status": "22 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "KPN", "name": "KUPPAM", "lat": 12.0983509, "lng": 75.3663192}
  },
   {"has_departed": true, "actdep": "11:41", "schdep": "11:30", "day": 0, "distance": 148, "actarr": "11:37", "actarr_date": "9 Nov 2018", "scharr": "11:28", "latemin": 9, "status": "9 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "JTJ", "name": "JOLARPETTAI", "lat": 12.5643214, "lng": 78.5797192}
   }, 
   {"has_departed": false, "actdep": "12:56", "schdep": "12:40", "day": 0, "distance": 232, "actarr": "12:55", "actarr_date": "9 Nov 2018", "scharr": "12:35", "latemin": 20, "status": "20 mins late", "has_arrived": true, "scharr_date": "9 Nov 2018", "station": {"code": "KPD", "name": "KATPADI JN", "lat": 12.9780435, "lng": 79.137728}
   }, 
   {"has_departed": false, "actdep": "13:42", "schdep": "13:35", "day": 0, "distance": 293, "actarr": "13:40", "actarr_date": "9 Nov 2018", "scharr": "13:33", "latemin": 7, "status": "7 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "AJJ", "name": "ARAKKONAM", "lat": 13.0841402, "lng": 79.6703816}
   }, 
   {"has_departed": false, "actdep": "15:45", "schdep": "15:45", "day": 0, "distance": 368, "actarr": "15:15", "actarr_date": "9 Nov 2018", "scharr": "15:15", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "MAS", "name": "CHENNAI CENTRAL", "lat": 13.081674, "lng": 80.2755685}
   },
   {"has_departed": false, "actdep": "17:50", "schdep": "17:50", "day": 0, "distance": 505, "actarr": "17:48", "actarr_date": "9 Nov 2018", "scharr": "17:48", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "GDR", "name": "GUDUR JN", "lat": 14.1463241, "lng": 79.8503768}
   }, 
   {"has_departed": false, "actdep": "18:08", "schdep": "18:08", "day": 0, "distance": 543, "actarr": "18:06", "actarr_date": "9 Nov 2018", "scharr": "18:06", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "NLR", "name": "NELLORE", "lat": 14.4493717, "lng": 79.9873763}
   }, 
   {"has_departed": false, "actdep": "19:34", "schdep": "19:34", "day": 0, "distance": 659, "actarr": "19:33", "actarr_date": "9 Nov 2018", "scharr": "19:33", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "OGL", "name": "ONGOLE", "lat": 15.5058714, "lng": 80.0499454}
   }, 
   {"has_departed": false, "actdep": "22:30", "schdep": "22:30", "day": 0, "distance": 798, "actarr": "22:25", "actarr_date": "9 Nov 2018", "scharr": "22:25", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "9 Nov 2018", "station": {"code": "BZA", "name": "VIJAYAWADA JN", "lat": 16.5087586, "lng": 80.6185102}
   },
    {"has_departed": false, "actdep": "01:06", "schdep": "01:06", "day": 1, "distance": 1005, "actarr": "01:05", "actarr_date": "10 Nov 2018", "scharr": "01:05", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "WL", "name": "WARANGAL", "lat": 17.9899747, "lng": 79.6043994}
    },
     {"has_departed": false, "actdep": "02:40", "schdep": "02:40", "day": 1, "distance": 1106, "actarr": "02:39", "actarr_date": "10 Nov 2018", "scharr": "02:39", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "RDM", "name": "RAMGUNDAM", "lat": 18.764092, "lng": 79.4740071}
     }, 
     {"has_departed": false, "actdep": "03:33", "schdep": "03:33", "day": 1, "distance": 1178, "actarr": "03:32", "actarr_date": "10 Nov 2018", "scharr": "03:32", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "SKZR", "name": "SIRPUR KAGAZNGR", "lat": 19.3581456, "lng": 79.4823339}
     }, 
    {"has_departed": false, "actdep": "05:10", "schdep": "05:10", "day": 1, "distance": 1247, "actarr": "05:00", "actarr_date": "10 Nov 2018", "scharr": "05:00", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "BPQ", "name": "BALHARSHAH", "lat": 19.8530843, "lng": 79.3489143}
    }, 
    {"has_departed": false, "actdep": "05:30", "schdep": "05:30", "day": 1, "distance": 1261, "actarr": "05:29", "actarr_date": "10 Nov 2018", "scharr": "05:29", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "CD", "name": "CHANDRAPUR", "lat": 20.0, "lng": 80.0}
    }, 
    {"has_departed": false, "actdep": "07:13", "schdep": "07:13", "day": 1, "distance": 1382, "actarr": "07:12", "actarr_date": "10 Nov 2018", "scharr": "07:12", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "SEGM", "name": "SEVAGRAM", "lat": 20.7354059, "lng": 78.661555}
    },
     {"has_departed": false, "actdep": "08:30", "schdep": "08:30", "day": 1, "distance": 1458, "actarr": "08:20", "actarr_date": "10 Nov 2018", "scharr": "08:20", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "NGP", "name": "NAGPUR", "lat": 21.1500964, "lng": 79.0127048991187}
     }, 
    {"has_departed": false, "actdep": "10:09", "schdep": "10:09", "day": 1, "distance": 1562, "actarr": "10:08", "actarr_date": "10 Nov 2018", "scharr": "10:08", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "PAR", "name": "PANDHURNA", "lat": 21.5954, "lng": 78.5319}
    },
    {"has_departed": false, "actdep": "11:41", "schdep": "11:41", "day": 1, "distance": 1649, "actarr": "11:40", "actarr_date": "10 Nov 2018", "scharr": "11:40", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "BZU", "name": "BETUL", "lat": 21.833333, "lng": 77.833333}
    }, 
    {"has_departed": false, "actdep": "12:24", "schdep": "12:24", "day": 1, "distance": 1685, "actarr": "12:22", "actarr_date": "10 Nov 2018", "scharr": "12:22", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "GDYA", "name": "GHORADONGRI", "lat": 22.1253704, "lng": 78.0025185}
    }, 
    {"has_departed": false, "actdep": "14:45", "schdep": "14:45", "day": 1, "distance": 1755, "actarr": "14:35", "actarr_date": "10 Nov 2018", "scharr": "14:35", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "ET", "name": "ITARSI JN", "lat": 22.6124961, "lng": 77.762753}
    },
     {"has_departed": false, "actdep": "15:40", "schdep": "15:40", "day": 1, "distance": 1823, "actarr": "15:38", "actarr_date": "10 Nov 2018", "scharr": "15:38", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "PPI", "name": "PIPARIYA", "lat": 26.97787545, "lng": 85.5302366649697}
     }, 
    {"has_departed": false, "actdep": "16:42", "schdep": "16:42", "day": 1, "distance": 1917, "actarr": "16:40", "actarr_date": "10 Nov 2018", "scharr": "16:40", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "NU", "name": "NARSINGHPUR", "lat": 22.9467047, "lng": 79.1980228}
    }, 
    {"has_departed": false, "actdep": "18:20", "schdep": "18:20", "day": 1, "distance": 2001, "actarr": "18:10", "actarr_date": "10 Nov 2018", "scharr": "18:10", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "JBP", "name": "JABALPUR", "lat": 23.1608938, "lng": 79.9497702}
    },
     {"has_departed": false, "actdep": "19:40", "schdep": "19:40", "day": 1, "distance": 2091, "actarr": "19:35", "actarr_date": "10 Nov 2018", "scharr": "19:35", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "KTE", "name": "KATNI", "lat": 23.8779575, "lng": 80.4535902}
     }, 
     {"has_departed": false, "actdep": "20:30", "schdep": "20:30", "day": 1, "distance": 2154, "actarr": "20:28", "actarr_date": "10 Nov 2018", "scharr": "20:28", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "MYR", "name": "MAIHAR", "lat": 24.2565898, "lng": 80.7639082}
     }, 
     {"has_departed": false, "actdep": "21:15", "schdep": "21:15", "day": 1, "distance": 2190, "actarr": "21:05", "actarr_date": "10 Nov 2018", "scharr": "21:05", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "10 Nov 2018", "station": {"code": "STA", "name": "SATNA", "lat": 24.5, "lng": 81.0}
     }, 
    {"has_departed": false, "actdep": "01:15", "schdep": "01:15", "day": 2, "distance": 2365, "actarr": "01:05", "actarr_date": "11 Nov 2018", "scharr": "01:05", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "ACOI", "name": "ALLAHABD CHHEOKI", "lat": 25.377121, "lng": 81.86711059999999}
    }, 
    {"has_departed": false, "actdep": "02:45", "schdep": "02:45", "day": 2, "distance": 2441, "actarr": "02:40", "actarr_date": "11 Nov 2018", "scharr": "02:40", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "MZP", "name": "MIRZAPUR", "lat": 25.1461346, "lng": 82.5689952}
    }, 
    {"has_departed": false, "actdep": "05:18", "schdep": "05:18", "day": 2, "distance": 2505, "actarr": "05:08", "actarr_date": "11 Nov 2018", "scharr": "05:08", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "DDU", "name": "PT.DEEN DAYAL UPADHYAYA JN.", "lat": 28.62788925, "lng": 77.1122717940814}
    }, 
    {"has_departed": false, "actdep": "06:29", "schdep": "06:29", "day": 2, "distance": 2598, "actarr": "06:27", "actarr_date": "11 Nov 2018", "scharr": "06:27", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "BXR", "name": "BUXAR", "lat": 25.51231115, "lng": 84.0998815542797}
    }, 
    {"has_departed": false, "actdep": "07:55", "schdep": "07:55", "day": 2, "distance": 2667, "actarr": "07:53", "actarr_date": "11 Nov 2018", "scharr": "07:53", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "ARA", "name": "ARA", "lat": 6.6666755, "lng": -71.0000086}
    },
     {"has_departed": false, "actdep": "00:00", "schdep": "Destination", "day": 2, "distance": 2706, "actarr": "09:05", "actarr_date": "11 Nov 2018", "scharr": "09:05", "latemin": 0, "status": "0 mins late", "has_arrived": false, "scharr_date": "11 Nov 2018", "station": {"code": "DNR", "name": "DANAPUR", "lat": 25.6358901, "lng": 85.0474045}
     	}
     ],
      "train": 
      {"classes": 
      [{"code": "2A", "available": "Y", "name": "SECOND AC"}, {"code": "CC", "available": "N", "name": "AC CHAIR CAR"}, {"code": "3E", "available": "N", "name": "3rd AC ECONOMY"}, {"code": "1A", "available": "N", "name": "FIRST AC"}, {"code": "SL", "available": "Y", "name": "SLEEPER CLASS"}, {"code": "FC", "available": "N", "name": "FIRST CLASS"}, {"code": "2S", "available": "N", "name": "SECOND SEATING"}, {"code": "3A", "available": "Y", "name": "THIRD AC"}], "name": "SBC-PPTA SANGHAMITRA EXP", "days": [{"code": "MON", "runs": "Y"}, {"code": "TUE", "runs": "Y"}, {"code": "WED", "runs": "Y"}, {"code": "THU", "runs": "Y"}, {"code": "FRI", "runs": "Y"}, {"code": "SAT", "runs": "Y"}, {"code": "SUN", "runs": "Y"}], "number": "12295"}, "current_station": {"code": "KPD", "name": "KATPADI JN", "lat": 12.9780435, "lng": 79.137728}, "response_code": 200, "debit": 2, "position": "Train arrived at KATPADI JN(KPD) and late by 16 minutes.", "start_date": "9 Nov 2018"};
console.log(array.train.name);
var n = array.route.length;
for(var i =0 ;i<n;i++){
	console.log(array.route[i].station.name);
	console.log(array.route[i].status);
	console.log(array.route[i].latemin);
}
/*{
  "response_code": 200,
  "debit": 3,
  "position": "Train has reached Destination and late by 5 minutes",
  "train": {
    "number": "12046",
    "name": "CDG NDLS SHTBDI"
  },
  "route": [
    {
      "no": 1,
      "day": 0,
      "station": {
        "name": "CHANDIGARH",
        "code": "CDG"
      },
      "has_arrived": false,
      "has_departed": true,
      "distance": 0,
      "scharr": "Source",
      "schdep": "12:00",
      "actarr": "00:00",
      "actdep": "12:00",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 0
    },
    {
      "no": 2,
      "day": 0,
      "station": {
        "name": "AMBALA CANT JN",
        "code": "UMB"
      },
      "has_arrived": true,
      "has_departed": true,
      "distance": 67,
      "scharr": "12:40",
      "schdep": "12:42",
      "actarr": "12:40",
      "actdep": "12:42",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 0
    },
    {
      "no": 3,
      "day": 0,
      "station": {
        "name": "NEW DELHI",
        "code": "NDLS"
      },
      "has_arrived": true,
      "has_departed": false,
      "distance": 265,
      "scharr": "15:25",
      "schdep": "Destination",
      "actarr": "15:30",
      "actdep": "00:00",
      "scharr_date": "19 Nov 2015",
      "actarr_date": "19 Nov 2015",
      "latemin": 5
    }
  ]
}*/