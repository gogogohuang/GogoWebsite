(function() {
    var app = angular.module('photoGallery', []);
 
    app.controller('GellaryController', function(){
        this.photos = datas;
    });

    app.controller('panelController', function(){
        this.tab = 0;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.directive('gellary',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/gellary.html'
        };
    });

    app.directive('blog',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/blog.html'
        };
    });
    app.directive('about',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/about.html'
        };
    });
    app.directive('contact',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/contact.html'
        };
    });



    var datas = 
        [
             {
                author: 'gogogo',
                camera: 'NikonD7000',
                images:[
                    {
                        decription  :   "India",
                        path        :   "image/india.jpg",
                        labels      :   [
                                            "india",
                                            "boat",
                                            "ganges"
                                        ],
                        like        :   10,
                        canDownload :   true
                    },
                    {
                        decription  :   "India",
                        path        :   "image/india_1.JPG",
                        labels      :   [
                                            "india",
                                            "Taj Mahal"
                                        ],
                        like        :   10,
                        canDownload :   true
                   
                    }
                ],
                reviews:[
                            {
                                stars : 5,
                                body: "I love this",
                                author: "test"
                            },
                            {
                                stars: 3,
                                body: "Not really good",
                                author : "test@moxa.com"
                            }
                        ]
             },
             {
                author: 'Justin',
                camera: 'Canon50D',
                images:
                    [
                        {
                            decription  :   "Nepal",
                            path       :   "image/nepal.jpg",
                            labels      :   [
                                                "nepal"
                                            ],
                            like        :   10,
                            canDownload :   false
                        }
                    ],
                reviews:
                    [
                        {
                            stars : 5,
                            body: "I love this",
                            author: "gogo"
                        },
                        {
                            stars: 4,
                            body: "Not Bad",
                            author : "test@moxa.com"
                        }
                    ]
             },
             {
                author: 'Justin',
                camera: 'Nikon',
                images:
                    [
                        {
                            decription  :   "Stacey",
                            path        :   "image/stacey.jpg",
                            labels      :   [
                                                "taiwan"
                                            ],
                            like        :   10,
                            canDownload :   false
                        }
                    ],
                reviews:
                    [
                        {
                            stars : 5,
                            body: "I love this",
                            author: "gogo"
                        },
                        {
                            stars: 4,
                            body: "Not Bad",
                            author : "test@moxa.com"
                        }
                    ]
             }
        ];
})();
