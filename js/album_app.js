(function() {
    var app = angular.module('photoGallery', []);
 
    app.controller('GellaryController', function(){
        this.photos = datas;
    });

    var datas = [
             {
                author: 'gogogo',
                camera: 'NikonD7000',
                images:[
                    {
                        decription  :   'India',
                        path        :   "image/india.jpg",
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
                            decription  :   'Nepal',
                            india       :   "image/nepal.JPG",
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
