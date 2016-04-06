'use strict';

angular.module('confusionApp')

        .constant('baseURL', 'https://secure-cliffs-69558.herokuapp.com/')

        .factory('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
                return $resource(baseURL+'dishes/:id', null, {
                    'update':{
                        method:'PUT'
                    }
                });
                    
        }])

        .factory('promotionFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            
                    return $resource(baseURL+'promotions/:id'); 
            
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            return $resource(baseURL+'leadership/:id');
            
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL){

            return $resource(baseURL+'feedback/:id', null, {'save':{method:'POST'}});
            
        }])

        .factory('loginFactory', ['$resource', 'baseURL', function($resource, baseURL){

            console.log("loginFactory");
            return $resource(baseURL+'users/register', null, {'enter':{method:'POST'}});
            
        }])

;