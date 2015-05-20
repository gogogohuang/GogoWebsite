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

    app.controller('change_photo', function($scope, $interval){
        var i;
        i=0;
        $scope.path = datas[i].images[0].path;
        $scope._labels = datas[i].images[0].labels;

        $interval(function(){
            i++;
            if(i>6){
                i=0;
            }
            $scope.path = datas[i].images[0].path;
            $scope._labels = datas[i].images[0].labels;
        },3000);
    });
   
    app.controller('albumSelect', function($scope){
        $scope.album_List = "girls";

    });

    
    app.directive('gellary',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/gellary.html',
            replace     :   true,
        };
    });

    app.directive('blog',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/blog.html',
            replace     :   true,
        };
    });
    app.directive('about',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/about.html',
            replace     :   true,
        };
    });
    app.directive('contact',function(){
        return {
            restrict    :   'E',
            templateUrl :   'html/contact.html',
            replace     :   true,
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
                            decription  :   "Girl",
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
             },
             {
                author: 'Justin',
                camera: 'Nikon',
                images:
                    [
                        {
                            decription  :   "Wedding",
                            path        :   "image/wedding.jpg",
                            labels      :   [
                                                "wedding"
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
                            decription  :   "Tokyo",
                            path        :   "image/tokyo.jpg",
                            labels      :   [
                                                "tokyo",
                                                "B/W",
                                                "lake"
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
                            decription  :   "Girls",
                            path        :   "image/girl.jpg",
                            labels      :   [
                                                "girl",
                                                "portrait"
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
                            decription  :   "HongKong",
                            path        :   "image/hongkong.jpg",
                            labels      :   [
                                                "hongkong",
                                                "B/W",
                                                "street"
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
