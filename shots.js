var allShots = [
{period:5,minute:4,second:07,team:'Charlotte Bobcats',assist:'Josh Mcroberts',player:'Al Jefferson',result:'made',distance:0,x:25,y:88},
{period:2,minute:2,second:36,team:'Charlotte Bobcats',assist:'Gerald Henderson',player:'Al Jefferson',result:'made',distance:10,x:35,y:85},
{period:4,minute:1,second:53,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:10,x:18,y:81},
{period:2,minute:7,second:28,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'missed',distance:10,x:15,y:8},
{period:1,minute:9,second:53,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'made',distance:10,x:31,y:14},
{period:4,minute:10,second:22,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:10,x:35,y:85},
{period:2,minute:2,second:58,team:'Brooklyn Nets',assist:'',player:'Paul Pierce',result:'made',distance:10,x:19,y:14},
{period:1,minute:11,second:37,team:'Brooklyn Nets',assist:'Paul Pierce',player:'Shaun Livingston',result:'made',distance:10,x:21,y:15},
{period:2,minute:3,second:30,team:'Brooklyn Nets',assist:'Joe Johnson',player:'Paul Pierce',result:'made',distance:11,x:18,y:14},
{period:3,minute:5,second:41,team:'Brooklyn Nets',assist:'',player:'Paul Pierce',result:'missed',distance:11,x:27,y:17},
{period:3,minute:2,second:44,team:'Charlotte Bobcats',assist:'Gerald Henderson',player:'Kemba Walker',result:'made',distance:12,x:24,y:76},
{period:3,minute:5,second:05,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'made',distance:13,x:13,y:82},
{period:2,minute:3,second:56,team:'Brooklyn Nets',assist:'',player:'Andray Blatche',result:'missed',distance:13,x:31,y:18},
{period:1,minute:9,second:15,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:13,x:35,y:14},
{period:3,minute:6,second:03,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:14,x:13,y:81},
{period:1,minute:6,second:16,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:14,x:11,y:85},
{period:3,minute:11,second:38,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:14,x:14,y:79},
{period:5,minute:2,second:58,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:14,x:39,y:9},
{period:3,minute:1,second:24,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:15,x:11,y:83},
{period:5,minute:1,second:00,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:15,x:13,y:15},
{period:3,minute:7,second:37,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'missed',distance:15,x:11,y:82},
{period:3,minute:10,second:47,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'made',distance:15,x:28,y:21},
{period:3,minute:0,second:32,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:15,x:12,y:13},
{period:2,minute:3,second:43,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'made',distance:15,x:35,y:77},
{period:2,minute:0,second:27,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:15,x:24,y:73},
{period:1,minute:0,second:00,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:16,x:11,y:80},
{period:3,minute:9,second:56,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'made',distance:16,x:9,y:87},
{period:3,minute:1,second:17,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'missed',distance:16,x:40,y:84},
{period:1,minute:4,second:16,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'made',distance:16,x:11,y:81},
{period:2,minute:7,second:09,team:'Charlotte Bobcats',assist:'',player:'Luke Ridnour',result:'made',distance:16,x:10,y:84},
{period:2,minute:6,second:54,team:'Brooklyn Nets',assist:'',player:'Shaun Livingston',result:'made',distance:16,x:22,y:22},
{period:2,minute:1,second:30,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:17,x:18,y:72},
{period:4,minute:2,second:29,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:17,x:12,y:77},
{period:5,minute:1,second:20,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:17,x:25,y:71},
{period:3,minute:4,second:48,team:'Brooklyn Nets',assist:'',player:'Andray Blatche',result:'missed',distance:17,x:34,y:21},
{period:1,minute:10,second:25,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'made',distance:17,x:32,y:22},
{period:3,minute:4,second:37,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'missed',distance:17,x:18,y:72},
{period:4,minute:0,second:36,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'made',distance:17,x:40,y:80},
{period:1,minute:3,second:44,team:'Charlotte Bobcats',assist:'',player:'Michael Kidd-Gilchrist',result:'missed',distance:17,x:25,y:71},
{period:1,minute:4,second:46,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:18,x:39,y:77},
{period:2,minute:0,second:48,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:18,x:11,y:77},
{period:3,minute:1,second:43,team:'Brooklyn Nets',assist:'Joe Johnson',player:'Jorge Gutierrez',result:'made',distance:18,x:37,y:19},
{period:2,minute:5,second:37,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:18,x:19,y:71},
{period:4,minute:9,second:15,team:'Charlotte Bobcats',assist:'',player:'Luke Ridnour',result:'made',distance:18,x:7,y:85},
{period:4,minute:10,second:57,team:'Charlotte Bobcats',assist:'Luke Ridnour',player:'Cody Zeller',result:'made',distance:19,x:8,y:79},
{period:4,minute:8,second:15,team:'Brooklyn Nets',assist:'Jorge Gutierrez',player:'Deron Williams',result:'made',distance:19,x:37,y:21},
{period:4,minute:7,second:18,team:'Brooklyn Nets',assist:'Deron Williams',player:'Jorge Gutierrez',result:'made',distance:19,x:14,y:21},
{period:5,minute:0,second:43,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'made',distance:19,x:16,y:71},
{period:2,minute:5,second:16,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:19,x:10,y:77},
{period:3,minute:0,second:07,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:19,x:24,y:69},
{period:4,minute:7,second:58,team:'Charlotte Bobcats',assist:'',player:'Luke Ridnour',result:'made',distance:19,x:44,y:84},
{period:1,minute:8,second:30,team:'Charlotte Bobcats',assist:'Gerald Henderson',player:'Michael Kidd-Gilchrist',result:'made',distance:19,x:39,y:75},
{period:1,minute:9,second:00,team:'Charlotte Bobcats',assist:'Gerald Henderson',player:'Al Jefferson',result:'made',distance:1,x:25,y:87},
{period:1,minute:5,second:13,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:1,x:24,y:87},
{period:1,minute:3,second:10,team:'Charlotte Bobcats',assist:'Gerald Henderson',player:'Al Jefferson',result:'made',distance:1,x:25,y:87},
{period:3,minute:0,second:55,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:1,x:24,y:88},
{period:1,minute:6,second:52,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'made',distance:1,x:26,y:88},
{period:3,minute:1,second:55,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'made',distance:1,x:26,y:88},
{period:1,minute:1,second:07,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'made',distance:1,x:24,y:6},
{period:2,minute:8,second:06,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Andray Blatche',result:'made',distance:1,x:24,y:6},
{period:2,minute:11,second:03,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'made',distance:1,x:26,y:88},
{period:2,minute:7,second:52,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'made',distance:1,x:25,y:87},
{period:4,minute:7,second:31,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Cody Zeller',result:'made',distance:1,x:24,y:88},
{period:4,minute:0,second:59,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Deron Williams',result:'made',distance:1,x:24,y:7},
{period:4,minute:6,second:50,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:1,x:24,y:7},
{period:3,minute:4,second:13,team:'Brooklyn Nets',assist:'Andray Blatche',player:'Jorge Gutierrez',result:'made',distance:1,x:26,y:6},
{period:3,minute:11,second:02,team:'Charlotte Bobcats',assist:'',player:'Josh Mcroberts',result:'made',distance:1,x:26,y:87},
{period:2,minute:4,second:20,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Josh Mcroberts',result:'made',distance:1,x:26,y:88},
{period:2,minute:11,second:33,team:'Charlotte Bobcats',assist:'Luke Ridnour',player:'Josh Mcroberts',result:'made',distance:1,x:24,y:87},
{period:5,minute:3,second:23,team:'Charlotte Bobcats',assist:'Al Jefferson',player:'Josh Mcroberts',result:'made',distance:1,x:25,y:87},
{period:4,minute:6,second:33,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:1,x:24,y:87},
{period:4,minute:4,second:11,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:1,x:25,y:87},
{period:3,minute:8,second:03,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Mason Plumlee',result:'made',distance:1,x:25,y:7},
{period:4,minute:1,second:38,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Mason Plumlee',result:'made',distance:1,x:24,y:6},
{period:4,minute:2,second:10,team:'Brooklyn Nets',assist:'',player:'Mason Plumlee',result:'missed',distance:1,x:24,y:6},
{period:3,minute:9,second:25,team:'Charlotte Bobcats',assist:'',player:'Michael Kidd-Gilchrist',result:'made',distance:1,x:25,y:87},
{period:1,minute:6,second:31,team:'Charlotte Bobcats',assist:'',player:'Michael Kidd-Gilchrist',result:'missed',distance:1,x:26,y:88},
{period:5,minute:0,second:34,team:'Brooklyn Nets',assist:'',player:'Shaun Livingston',result:'missed',distance:1,x:24,y:6},
{period:1,minute:10,second:47,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'missed',distance:20,x:28,y:68},
{period:5,minute:0,second:10,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'made',distance:21,x:4,y:84},
{period:4,minute:0,second:26,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Deron Williams',result:'made',distance:21,x:44,y:15},
{period:5,minute:4,second:33,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:21,x:14,y:24},
{period:3,minute:3,second:33,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'missed',distance:23,x:2,y:8},
{period:2,minute:9,second:26,team:'Charlotte Bobcats',assist:'',player:'Anthony Tolliver',result:'missed',distance:23,x:48,y:84},
{period:5,minute:2,second:35,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Chris Douglas-Roberts',result:'made',distance:23,x:48,y:87},
{period:1,minute:3,second:58,team:'Brooklyn Nets',assist:'Andray Blatche',player:'Deron Williams',result:'made',distance:23,x:2,y:7},
{period:1,minute:1,second:24,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:23,x:48,y:10},
{period:3,minute:1,second:08,team:'Brooklyn Nets',assist:'Jorge Gutierrez',player:'Joe Johnson',result:'made',distance:23,x:48,y:7},
{period:3,minute:3,second:49,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:23,x:2,y:84},
{period:4,minute:5,second:54,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:23,x:48,y:86},
{period:4,minute:9,second:56,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Chris Douglas-Roberts',result:'made',distance:24,x:49,y:85},
{period:1,minute:3,second:31,team:'Brooklyn Nets',assist:'Deron Williams',player:'Alan Anderson',result:'made',distance:25,x:7,y:24},
{period:4,minute:10,second:15,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'missed',distance:25,x:15,y:29},
{period:2,minute:6,second:37,team:'Charlotte Bobcats',assist:'Chris Douglas-Roberts',player:'Anthony Tolliver',result:'made',distance:25,x:21,y:63},
{period:1,minute:6,second:03,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:25,x:18,y:30},
{period:3,minute:8,second:17,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:25,x:29,y:31},
{period:4,minute:4,second:22,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:25,x:18,y:30},
{period:1,minute:10,second:11,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Gerald Henderson',result:'made',distance:25,x:11,y:67},
{period:4,minute:2,second:47,team:'Brooklyn Nets',assist:'Mason Plumlee',player:'Joe Johnson',result:'made',distance:25,x:33,y:30},
{period:5,minute:2,second:15,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Joe Johnson',result:'made',distance:25,x:2,y:17},
{period:1,minute:4,second:56,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:25,x:6,y:23},
{period:2,minute:8,second:23,team:'Charlotte Bobcats',assist:'Chris Douglas-Roberts',player:'Luke Ridnour',result:'made',distance:25,x:13,y:66},
{period:4,minute:6,second:13,team:'Brooklyn Nets',assist:'Deron Williams',player:'Mirza Teletovic',result:'made',distance:25,x:18,y:30},
{period:2,minute:2,second:25,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:25,x:32,y:30},
{period:3,minute:2,second:30,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:25,x:23,y:31},
{period:4,minute:3,second:29,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:25,x:46,y:20},
{period:5,minute:3,second:44,team:'Brooklyn Nets',assist:'Deron Williams',player:'Paul Pierce',result:'made',distance:25,x:32,y:30},
{period:1,minute:0,second:22,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'missed',distance:26,x:4,y:21},
{period:2,minute:8,second:48,team:'Charlotte Bobcats',assist:'',player:'Anthony Tolliver',result:'missed',distance:26,x:35,y:64},
{period:2,minute:10,second:02,team:'Charlotte Bobcats',assist:'Bismack Biyombo',player:'Chris Douglas-Roberts',result:'made',distance:26,x:25,y:62},
{period:2,minute:8,second:55,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:26,x:10,y:67},
{period:4,minute:5,second:20,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:26,x:39,y:66},
{period:4,minute:1,second:15,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:26,x:43,y:69},
{period:1,minute:8,second:11,team:'Brooklyn Nets',assist:'Joe Johnson',player:'Deron Williams',result:'made',distance:26,x:31,y:31},
{period:1,minute:7,second:39,team:'Brooklyn Nets',assist:'Mason Plumlee',player:'Deron Williams',result:'made',distance:26,x:8,y:26},
{period:1,minute:1,second:54,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'made',distance:26,x:6,y:24},
{period:4,minute:5,second:03,team:'Brooklyn Nets',assist:'Andray Blatche',player:'Deron Williams',result:'made',distance:26,x:24,y:32},
{period:2,minute:1,second:39,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:26,x:28,y:32},
{period:3,minute:7,second:26,team:'Brooklyn Nets',assist:'Paul Pierce',player:'Joe Johnson',result:'made',distance:26,x:38,y:28},
{period:5,minute:1,second:39,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:26,x:47,y:19},
{period:5,minute:0,second:06,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:26,x:27,y:32},
{period:3,minute:5,second:20,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:26,x:45,y:71},
{period:4,minute:7,second:03,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:26,x:16,y:64},
{period:2,minute:8,second:40,team:'Brooklyn Nets',assist:'Shaun Livingston',player:'Mirza Teletovic',result:'made',distance:26,x:21,y:32},
{period:2,minute:4,second:37,team:'Brooklyn Nets',assist:'Andray Blatche',player:'Mirza Teletovic',result:'made',distance:26,x:13,y:29},
{period:3,minute:3,second:10,team:'Brooklyn Nets',assist:'Andray Blatche',player:'Mirza Teletovic',result:'made',distance:26,x:21,y:32},
{period:4,minute:10,second:38,team:'Brooklyn Nets',assist:'Deron Williams',player:'Mirza Teletovic',result:'made',distance:26,x:38,y:28},
{period:2,minute:5,second:56,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:26,x:34,y:30},
{period:3,minute:0,second:01,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:26,x:4,y:21},
{period:2,minute:0,second:37,team:'Brooklyn Nets',assist:'',player:'Paul Pierce',result:'missed',distance:26,x:20,y:32},
{period:3,minute:6,second:18,team:'Brooklyn Nets',assist:'',player:'Paul Pierce',result:'missed',distance:26,x:35,y:30},
{period:5,minute:0,second:37,team:'Brooklyn Nets',assist:'',player:'Paul Pierce',result:'missed',distance:26,x:20,y:32},
{period:4,minute:11,second:26,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:27,x:16,y:63},
{period:5,minute:1,second:50,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:27,x:43,y:68},
{period:4,minute:3,second:50,team:'Charlotte Bobcats',assist:'',player:'Luke Ridnour',result:'missed',distance:27,x:44,y:69},
{period:2,minute:1,second:08,team:'Brooklyn Nets',assist:'Deron Williams',player:'Mirza Teletovic',result:'made',distance:27,x:31,y:32},
{period:3,minute:10,second:08,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:28,x:18,y:33},
{period:3,minute:6,second:58,team:'Charlotte Bobcats',assist:'Josh Mcroberts',player:'Kemba Walker',result:'made',distance:28,x:36,y:62},
{period:4,minute:3,second:08,team:'Charlotte Bobcats',assist:'Josh Mcroberts',player:'Kemba Walker',result:'made',distance:28,x:39,y:64},
{period:1,minute:6,second:54,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:2,x:25,y:86},
{period:4,minute:4,second:39,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:2,x:23,y:87},
{period:4,minute:4,second:30,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:2,x:27,y:87},
{period:4,minute:9,second:32,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'made',distance:2,x:23,y:6},
{period:2,minute:11,second:18,team:'Brooklyn Nets',assist:'',player:'Alan Anderson',result:'missed',distance:2,x:23,y:7},
{period:4,minute:7,second:45,team:'Brooklyn Nets',assist:'',player:'Andray Blatche',result:'missed',distance:2,x:23,y:6},
{period:1,minute:4,second:28,team:'Brooklyn Nets',assist:'',player:'Andray Blatche',result:'missed',distance:2,x:25,y:8},
{period:1,minute:2,second:50,team:'Brooklyn Nets',assist:'',player:'Andray Blatche',result:'missed',distance:2,x:27,y:7},
{period:2,minute:7,second:11,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:2,x:27,y:88},
{period:1,minute:1,second:15,team:'Charlotte Bobcats',assist:'',player:'Cody Zeller',result:'missed',distance:2,x:27,y:88},
{period:1,minute:8,second:47,team:'Brooklyn Nets',assist:'Paul Pierce',player:'Deron Williams',result:'made',distance:2,x:23,y:6},
{period:1,minute:5,second:50,team:'Charlotte Bobcats',assist:'Josh Mcroberts',player:'Gerald Henderson',result:'made',distance:2,x:27,y:88},
{period:4,minute:6,second:33,team:'Charlotte Bobcats',assist:'',player:'Josh Mcroberts',result:'made',distance:2,x:24,y:86},
{period:3,minute:6,second:35,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'made',distance:2,x:27,y:88},
{period:3,minute:1,second:58,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:2,x:23,y:88},
{period:2,minute:9,second:14,team:'Brooklyn Nets',assist:'',player:'Shaun Livingston',result:'made',distance:2,x:27,y:6},
{period:1,minute:0,second:39,team:'Charlotte Bobcats',assist:'',player:'Gerald Henderson',result:'missed',distance:31,x:14,y:59},
{period:1,minute:9,second:40,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:3,x:27,y:86},
{period:2,minute:7,second:13,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:3,x:25,y:85},
{period:5,minute:0,second:11,team:'Charlotte Bobcats',assist:'',player:'Josh McRoberts',result:'missed',distance:3,x:25,y:85},
{period:1,minute:11,second:19,team:'Charlotte Bobcats',assist:'',player:'Michael Kidd-Gilchrist',result:'missed',distance:3,x:28,y:88},
{period:2,minute:0,second:00,team:'Brooklyn Nets',assist:'',player:'Mirza Teletovic',result:'missed',distance:56,x:33,y:61},
{period:2,minute:1,second:49,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'made',distance:6,x:19,y:86},
{period:2,minute:6,second:05,team:'Charlotte Bobcats',assist:'',player:'Chris Douglas-Roberts',result:'missed',distance:6,x:25,y:82},
{period:4,minute:5,second:35,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'missed',distance:6,x:26,y:12},
{period:1,minute:2,second:28,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:6,x:25,y:12},
{period:3,minute:9,second:30,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:6,x:28,y:11},
{period:4,minute:8,second:52,team:'Brooklyn Nets',assist:'deron williams',player:'Andray Blatche',result:'made',distance:7,x:25,y:13},
{period:1,minute:5,second:33,team:'Brooklyn Nets',assist:'',player:'Deron Williams',result:'made',distance:7,x:23,y:13},
{period:2,minute:3,second:15,team:'Charlotte Bobcats',assist:'Kemba Walker',player:'Al Jefferson',result:'made',distance:8,x:24,y:80},
{period:4,minute:2,second:12,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'missed',distance:8,x:19,y:12},
{period:3,minute:10,second:33,team:'Charlotte Bobcats',assist:'',player:'Al Jefferson',result:'missed',distance:9,x:24,y:79},
{period:3,minute:2,second:10,team:'Brooklyn Nets',assist:'',player:'Joe Johnson',result:'made',distance:9,x:16,y:7},
{period:4,minute:6,second:43,team:'Charlotte Bobcats',assist:'',player:'Kemba Walker',result:'missed',distance:9,x:25,y:79},
{period:3,minute:11,second:18,team:'Brooklyn Nets',assist:'',player:'Shaun Livingston',result:'missed',distance:9,x:16,y:9},
{period:3,minute:9,second:10,team:'Brooklyn Nets',assist:'',player:'Shaun Livingston',result:'missed',distance:9,x:29,y:14},];
