
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //window.onload = this.onDeviceReady
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        app.receivedEvent('deviceready')
        if(typeof cordova !== 'undefined') {
            document.addEventListener('deviceready', this.onDeviceReady, false);
            
        } else {
            load()
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        load()

        //var status = document.getElementById('status')

        function appendStatus(message){
            // var li = document.createElement('li'),
            //     text = document.createTextNode(message)
            // li.appendChild(text)
            // status.appendChild(li)
        }
        //appendStatus('registering device...')

        var push = window.plugins.pushNotification
        push.register(token, error, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"})
        

        function token (token) {
            appendStatus('token: '+ token)

        } 
        function error (error) {
            appendStatus('error: '+ error)
        }


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function onNotificationAPN(e) {
    if (e.alert) {
        navigator.notification.alert(e.alert);
    }
        
    // if (e.sound) {
    //     var snd = new Media(e.sound);
    //     snd.play();
    // }
    
    if (e.badge) {
        //pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
}
