'use strict';
angular.module('confusionApp',['ui.router', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        
        .state('login',{
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                }
            }
        })
            //route for the home page
        .state('app',{
            url: '',
            views: {
                'header': {
                    templateUrl: 'views/header.html'
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'IndexController',
                    resolve: {
                        featuredDish: ['menuFactory',function(menuFactory){
                            return menuFactory.get({id:"5703891684d7b07026ea69f1"});
                        }],
                        promoDish: ['promotionFactory',function(promotionFactory){
                            return promotionFactory.get({id:"57038a5684d7b07026ea6a09"});
                        }],
                        execChef: ['corporateFactory',function(corporateFactory){
                            return corporateFactory.get({id:"57038aa184d7b07026ea6a0d"});
                        }]
                    }
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        
            //route for aboutus page
        .state('app.aboutus', {
            url: '/aboutus',
            views: {
                'content@': {
                    templateUrl: 'views/aboutus.html',
                    controller: 'AboutController',
                    resolve: {
                          leaders:  ['corporateFactory', function(corporateFactory){
                            return corporateFactory.query();
                          }]
                      }
                }
            }
        })
        
            //route for contactus page
        .state('app.contactus', {
            url: '/contactus',
            views: {
                'content@':{
                    templateUrl: 'views/contactus.html',
                    controller: 'ContactController'
                }
            }
        })
        
            //route for menu page
        .state('app.menu', {
            url: '/menu',
            views: {
                'content@': {
                    templateUrl: 'views/menu.html',
                    controller: 'MenuController',
                    resolve: {
                        dishes: ['menuFactory',function(menuFactory){
                            return menuFactory.query();
                        }]
                    }
                }
            }
        })
        
            //route for dishdetail page
        .state('app.dishdetails', {
            url: '/menu/:id',
            views: {
                'content@': {
                    templateUrl: 'views/dishdetail.html',
                    controller: 'DishDetailController',
                    resolve: {
                         dish: ['$stateParams','menuFactory', function($stateParams, menuFactory){
                                    return menuFactory.get({id:$stateParams.id});
                                }]
                    }
                }
            }
        });
        $urlRouterProvider.otherwise('');
    });
