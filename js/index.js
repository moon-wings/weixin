var test = angular.module('test',['ngTouch','ngAnimate','ngRoute']);
test.controller('indexCtrl',['$scope',function($scope){
	$scope.title = "微信";
}])
test.controller('weixinCtrl',['$scope',function($scope){
  $scope.chatList;
}])


test.directive('uqTitle',[function(){
	return {
		replace:true,
		restrict:'EAC',
		templateUrl:'views/uqTitle.html',
	}
}]).directive('uqTabBar',[function(){
	return {
		restrict:'E',
		templateUrl:'views/uqFoot.html'
	}
}]).directive('uqZimu',[function(){
  return {
    restrict:'E',
    // replace:true,
    templateUrl:'views/uqzimu.html',
    link:function($scope,el){
      if(localStorage.scroll){
        setTimeout(function(){
          $('#content').scrollTop(localStorage.scroll);
        },0)
      }
      var pos={};
      $('#tongxunlu .szm').each(function(){
        pos[$(this).attr('data-key')] = $(this).position().top;
      })
      el.on('click','.uq-item',function(){
        console.log($(this))
         var top = pos[$.trim($(this).text())];
         console.log(top)
         $('#content').animate({scrollTop:top});
         localStorage.scroll = top;
      })
    }
  }
}])


test.factory('$x',[function(){
    var chatList = [
      {image:'../img/01.jpg',name:'安小嘉',message:'想你',time:'09:21',
          liaotianjilu:[
            {xinxi:'在不？',isMe:false},
            {xinxi:'恩',isMe:true},
            {xinxi:'下雨了',isMe:false},
            {xinxi:'是啊',isMe:true},
            {xinxi:'青石板',isMe:false},
            {xinxi:'屋檐下',isMe:true},
            {xinxi:'白墙黛瓦',isMe:false},
            {xinxi:'有你就好',isMe:true}
          ]
      },
      {image:'../img/03.jpg',name:'安莫',message:'想你',time:'09:52',
          liaotianjilu:[
            {xinxi:'在不？',isMe:false},
            {xinxi:'恩',isMe:true},
            {xinxi:'下雨了',isMe:false},
            {xinxi:'是啊',isMe:true},
            {xinxi:'青石板',isMe:false},
            {xinxi:'屋檐下',isMe:true},
            {xinxi:'白墙黛瓦',isMe:false},
            {xinxi:'有你就好',isMe:true}
          ]
      },
      {image:'../img/02.jpg',name:'薄荷',message:'想你',time:'02:21',
          liaotianjilu:[
            {xinxi:'在不？',isMe:false},
            {xinxi:'恩',isMe:true},
            {xinxi:'下雨了',isMe:false},
            {xinxi:'是啊',isMe:true},
            {xinxi:'青石板',isMe:false},
            {xinxi:'屋檐下',isMe:true},
            {xinxi:'白墙黛瓦',isMe:false},
            {xinxi:'有你就好',isMe:true}
          ]
      },
      {image:'../img/04.jpg',name:'陈学冬',message:'想你',time:'22:01',
          liaotianjilu:[
            {xinxi:'在不？',isMe:false},
            {xinxi:'恩',isMe:true},
            {xinxi:'下雨了',isMe:false},
            {xinxi:'是啊',isMe:true},
            {xinxi:'青石板',isMe:false},
            {xinxi:'屋檐下',isMe:true},
            {xinxi:'白墙黛瓦',isMe:false},
            {xinxi:'有你就好',isMe:true}
          ]
      },
      {image:'../img/05.jpg',name:'淡漠',message:'想你',time:'15:31',
          liaotianjilu:[
            {xinxi:'在不？',isMe:false},
            {xinxi:'恩',isMe:true},
            {xinxi:'下雨了',isMe:false},
            {xinxi:'是啊',isMe:true},
            {xinxi:'青石板',isMe:false},
            {xinxi:'屋檐下',isMe:true},
            {xinxi:'白墙黛瓦',isMe:false},
            {xinxi:'有你就好',isMe:true}
          ]
      },
    ]
    var x = {
      getAllChat:function(){
        return chatList;
      }
    }
    return x;
}])

test.controller('weixinCtrl',['$scope','$x',function($scope,$x){
    $scope.chatList = $x.getAllChat();
    $scope.deleteList = function(id){
      $scope.chatList = $scope.chatList.filter(function(v,i){
        return i !== id;
      });
    }
}])
test.controller('tongxunluCtrl',['$scope',function($scope){
	$scope.tongxunlu = [
      {
        key:'A',
        people:[
            {name:'安小嘉',img:'../img/01.jpg',weixinhao:'asan'},
            {name:'艾辰',img:'../img/01.jpg',weixinhao:'asan'},
        ]
      },
      {
        key:'B',
        people:[
            {name:'薄荷',img:'../img/02.jpg',weixinhao:'asan'},
            {name:'斑马',img:'../img/02.jpg',weixinhao:'asan'}
        ]
      },
      {
      	key:'C',
      	people:[
      		{name:'陈学冬',img:'../img/03.jpg',weixinhao:'asan'},
          {name:'陈学冬',img:'../img/03.jpg',weixinhao:'asan'},
          {name:'陈学冬',img:'../img/03.jpg',weixinhao:'asan'}
      	]
      },
      {
        key:'E',
        people:[
          {name:'ediq',img:'../img/01.jpg',weixinhao:'asan'},
          {name:'ediq',img:'../img/01.jpg',weixinhao:'asan'}
        ]
      },
      {
        key:'F',
        people:[
          {name:'伏羲殇',img:'../img/01.jpg',weixinhao:'asan'},
          {name:'伏羲殇',img:'../img/01.jpg',weixinhao:'asan'}
        ]
      },
      {
        key:'Q',
        people:[
          {name:'轻薄的假相',img:'../img/01.jpg',weixinhao:'asan'},
          {name:'轻薄的假相',img:'../img/01.jpg',weixinhao:'asan'},
          {name:'轻薄的假相',img:'../img/01.jpg',weixinhao:'asan'},
        ]
      }
     ];
}])
test.controller('findCtrl',['$scope',function($scope){

}])
test.controller('meCtrl',['$scope',function($scope){

}])
test.controller('liaotianCtrl',['$scope','$routeParams','$x',function($scope,$routeParams,$x){
    var id = $routeParams.id;
    console.log(id);
    var chatList = $x.getAllChat();
    $scope.duifang = chatList[id].image;
    $scope.ziji = '../img/05.jpg';
    $scope.cl = chatList[id].liaotianjilu;
}])


test.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/',{
        controller:'indexCtrl',
        templateUrl:'views/weixin.html'
      }).when('/weixin',{
        controller:'indexCtrl',
        templateUrl:'views/weixin.html'
      }).when('/tongxunlu',{
        controller:'tongxunluCtrl',
        templateUrl:'views/tongxunlu.html'
      }).when('/find',{
	    controller:'findCtrl',
	    templateUrl:'views/find.html'
	  }).when('/me',{
	    controller:'meCtrl',
	    templateUrl:'views/me.html'
	  }).when('/weixin/:id',{
       controller:'liaotianCtrl',
       templateUrl:'views/liaotian.html'
    }).otherwise({
          redirectTo:'/'
      });
}])