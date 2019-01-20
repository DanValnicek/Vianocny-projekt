let imgsCount = {
    "anglicko":76,
    "dan":33,
    "disney land":15,
    "egypt":43,
    "ela":42,
    "chorvatsko":43,
    "Jozef":15,
    "Kristian":7,
    "Martina":11,
    "nela":21,
    "petr":10,
    "spoločné":59,
}


let generateImages = (pageName)=> {
    let imgsNumberInsertString = "";
    for (i = 1; i < imgsCount[pageName]; i++) {
        imgsNumberInsertString+=`
            <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                    <a href="images/${pageName}/${i}.jpg" class="image-popup" title="Name of photo or title here">
                    <div class="img-wrap">
                        <img src="images/${pageName}/${i}.jpg" alt="" class="img-responsive">
                    </div>
                    <div class="text-wrap">
                        <div class="text-inner popup">
                            <div>
                                <h2>${imgsDescription[pageName][i]}</h2>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
        `
    }
    $("#imgs-number-insert-wrapper").html(imgsNumberInsertString);
}
const imgsDescription={
    "anglicko": {
        1:"7-7-2013",
        2:"7-7-2013",
        3:"7-7-2013",
        4:"7-7-2013",
        5:"7-7-2013",
        6:"7-7-2013",
        7:"7-7-2013",
        8:"7-7-2013",
        9:"7-7-2013",
        10:"7-7-2013",
        11:"7-7-2013",
        12:"9-7-2013",
        13:"9-7-2013",
        14:"9-7-2013",
        15:"9-7-2013",
        16:"9-7-2013",
        17:"9-7-2013",
        18:"9-7-2013",
        19:"9-7-2013",
        20:"9-7-2013",
        21:"9-7-2013",
        22:"9-7-2013",
        23:"9-7-2013",
        24:"9-7-2013",
        25:"9-7-2013",
        26:"9-7-2013",
        27:"9-7-2013",
        28:"9-7-2013",
        29:"10-7-2013",
        30:"10-7-2013",
        31:"10-7-2013",
        32:"12-7-2013",
        33:"12-7-2013",
        34:"12-7-2013",
        35:"12-7-2013",
        36:"13-7-2013",
        37:"13-7-2013",
        38:"13-7-2013",
        39:"13-7-2013",
        40:"14-7-2013",
        41:"14-7-2013",
        42:"15-7-2013",
        43:"15-7-2013",
        44:"15-7-2013",
        45:"15-7-2013",
        46:"15-7-2013",
        47:"15-7-2013",
        48:"16-7-2013",
        49:"16-7-2013",
        50:"17-7-2013",
        51:"17-7-2013",
        52:"17-7-2013",
        53:"17-7-2013",
        54:"17-7-2013",
        55:"17-7-2013",
        56:"17-7-2013",
        57:"17-7-2013",
        58:"17-7-2013",
        59:"17-7-2013",
        60:"17-7-2013",
        61:"17-7-2013",
        62:"17-7-2013",
        63:"17-7-2013",
        64:"18-7-2013",
        65:"18-7-2013",
        66:"18-7-2013",
        67:"18-7-2013",
        68:"18-7-2013",
        69:"18-7-2013",
        70:"18-7-2013",
        71:"18-7-2013",
        72:"18-7-2013",
        73:"18-7-2013",
        74:"18-7-2013",
        75:"19-7-2013",
        76:"19-7-2013"

    }, "dan":{
            1:"25-4-2007",           
            2:"26-6-2010",
            3:"10-7-2010",
            4:"10-7-2010",
            5:"10-7-2010",
            6:"7-8-2010",
            7:"23-8-2010",
            8:"26-6-2011",
            9:"1-9-2012",
            10:"1-9-2012",
            11:"21-7-2013",
            12:"14-9-2013",
            13:"1-1-2015",
            14:"5-1-2015",
            15:"13-6-2015",
            16:"20-9-2016",
            17:"4-3-2017",
            18:"13-5-2017",
            19:"2-6-2017",
            20:"3-6-2017",
            21:"3-6-2017",
            22:"3-6-2017",
            23:"3-6-2017",
            24:"3-6-2017",
            25:"3-6-2017",
            26:"3-6-2017",
            27:"3-6-2017",
            28:"3-6-2017",
            29:"23-9-2017",
            30:"23-9-2017",
            31:"23-12-2017",
            32:"1-11-2018",
            33:"1-11-2018",
    },
            "disney land":{
                 1:"6-7-2013",
                 2:"6-7-2013",
                 3:"6-7-2013",
                 4:"6-7-2013",
                 5:"6-7-2013",
                 6:"6-7-2013",
                 7:"6-7-2013",
                 8:"6-7-2013",
                 9:"6-7-2013",
                10:"6-7-2013",
                11:"6-7-2013",
                12:"6-7-2013",
                13:"6-7-2013",
                14:"6-7-2013",
                15:"6-7-2013",
            },
                "egypt":{
                     1:"",
                     2:"",
                     3:"",
                     4:"",
                     5:"",
                     6:"",
                     7:"",
                     8:"",
                     9:"",
                    10:"",
                    11:"",
                    12:"",
                    13:"",
                    14:"",
                    15:"",
                    16:"",
                    17:"",
                    18:"",
                    19:"",
                    20:"",
                    21:"",
                    22:"",
                    23:"",
                    24:"",
                    25:"",
                    26:"",
                    27:"",
                    28:"",
                    29:"",
                    30:"",
                    31:"",
                    32:"",
                    33:"",
                    34:"",
                    35:"",
                    36:"29-6-2017",
                    37:"29-6-2017",
                    38:"29-6-2017",
                    39:"29-6-2017",
                    40:"29-6-2017",
                    41:"29-6-2017",
                    42:"29-6-2017",
                    43:"29-6-2017",
                },
                    "ela":{
                         1:"",
                         2:"",
                         3:"",
                         4:"",
                         5:"",
                         6:"",
                         7:"",
                         8:"",
                         9:"",
                        10:"",
                        11:"",
                        12:"",
                        13:"",
                        14:"",
                        15:"",
                        16:"",
                        17:"",
                        18:"",
                        19:"",
                        20:"",
                        21:"",
                        22:"",
                        23:"",
                        24:"",
                        25:"",
                        26:"",
                        27:"",
                        28:"",
                        29:"",
                        30:"",
                        31:"",
                        32:"",
                        33:"",
                        34:"",
                        35:"",
                        36:"",
                        37:"",
                        38:"",
                        39:"",
                        40:"",
                        41:"",
                        42:"",
                    },
                        "chorvatsko":{
                            1:"",
                            2:"",
                            3:"",
                            4:"",
                            5:"",
                            6:"",
                            7:"",
                            8:"",
                            9:"",
                           10:"",
                           11:"",
                           12:"",
                           13:"",
                           14:"",
                           15:"",
                           16:"",
                           17:"",
                           18:"",
                           19:"",
                           20:"",
                           21:"",
                           22:"",
                           23:"",
                           24:"",
                           25:"",
                           26:"",
                           27:"",
                           28:"",
                           29:"",
                           30:"",
                           31:"",
                           32:"",
                           33:"",
                           34:"",
                           35:"",
                           36:"",
                           37:"",
                           38:"",
                           39:"",
                           40:"",
                           41:"",
                           42:"",
                           43:"",
                        },
                            "Jozef":{
                                1:"",
                                2:"",
                                3:"",
                                4:"",
                                5:"",
                                6:"",
                                7:"",
                                8:"",
                                9:"",
                               10:"",
                               11:"",
                               12:"",
                               13:"",
                               14:"",
                               15:"",
                            },
                                "Kristian":{
                                    1:"",
                                    2:"",
                                    3:"",
                                    4:"",
                                    5:"",
                                    6:"",
                                    7:"",
                                },
                                    "Martina":{
                                        1:"",
                                        2:"",
                                        3:"",
                                        4:"",
                                        5:"",
                                        6:"",
                                        7:"",
                                        8:"",
                                        9:"",
                                       10:"",
                                       11:"",
                                },
                                        "nela":{
                                            1:"",
                                            2:"",
                                            3:"",
                                            4:"",
                                            5:"",
                                            6:"",
                                            7:"",
                                            8:"",
                                            9:"",
                                           10:"",
                                           11:"",
                                           12:"",
                                           13:"",
                                           14:"",
                                           15:"",
                                           16:"",
                                           17:"",
                                           18:"",
                                           19:"",
                                           20:"",
                                           21:"", 
                                        },
                                            "petr":{
                                                1:"",
                                                2:"2 a půl roku",
                                                3:"",
                                                4:"",
                                                5:"",
                                                6:"10km beh",
                                                7:"",
                                                8:"",
                                                9:"",
                                               10:"",
                                            },
                                                "spoločné":{
                                                     1:"",
                                                     2:"",
                                                     3:"",
                                                     4:"",
                                                     5:"",
                                                     6:"",
                                                     7:"",
                                                     8:"",
                                                     9:"",
                                                    10:"",
                                                    11:"",
                                                    12:"",
                                                    13:"",
                                                    14:"",
                                                    15:"",
                                                    16:"",
                                                    17:"",
                                                    18:"",
                                                    19:"",
                                                    20:"",
                                                    21:"",
                                                    22:"",
                                                    23:"",
                                                    24:"",
                                                    25:"",
                                                    26:"",
                                                    27:"",
                                                    28:"",
                                                    29:"",
                                                    30:"",
                                                    31:"",
                                                    32:"",
                                                    33:"",
                                                    34:"",
                                                    35:"",
                                                    36:"",
                                                    37:"",
                                                    38:"",
                                                    39:"",
                                                    40:"",
                                                    41:"",
                                                    42:"",
                                                    43:"",
                                                    44:"",
                                                    45:"",
                                                    46:"",
                                                    47:"",
                                                    48:"",
                                                    49:"",
                                                    50:"",
                                                    51:"",
                                                    52:"",
                                                    53:"",
                                                    54:"",
                                                    55:"",
                                                    56:"",
                                                    57:"",
                                                    58:"",
                                                    59:"",
                                                },
}