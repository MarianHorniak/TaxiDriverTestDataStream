//https://github.com/katzer/cordova-plugin-local-notifications/blob/9a13f4e/README.md

var LocalNotification = {
    //id:
    //orders Objednavky
    //messages Spravy
    notificationOrder: null,
    notificationMessage: null,
    scheduleOrder: function () {
        LocalNotification.clearOrder();
        LocalNotification.notificationOrder = LocalNotification.schedule("orders", "Zmena v objednávkach");
    },
    scheduleMessage: function () {
        LocalNotification.clearMessage();
        LocalNotification.notificationMessage = LocalNotification.schedule("messages", "Nová správa");
    },
    schedule: function (id, text) {
        if (!app.inBackground)
            return;

        try {
            if ("Notification" in window) {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let’s create a notification
                    if (permission === "granted") {

                        var notification = new Notification("Taxi driver", {
                            tag: id,
                            body: text
                        });
                        //notification.onshow = function () { console.log(‘show’); };
                        //notification.onclose = function () { LocalNotification.closeNotification(this); };
                        notification.onclick = function () { LocalNotification.closeNotification(this); };
                        return notification;
                    }
                });
            }
            else {

            }
        }
        catch (err) {
            app.log("Notification.requestPermission: " + err);
        }

        return null;
    },
    clearOrder: function () {
        
        try {
            if (LocalNotification.notificationOrder)
                LocalNotification.notificationOrder.close();
        }
        catch { }
        LocalNotification.notificationOrder = null;

    },
    clearMessage: function () {

        try {
            if (LocalNotification.notificationMessage)
                LocalNotification.notificationMessage.close();
        }
        catch { }
        LocalNotification.notificationMessage = null;

    },
    clearAll: function () {
        LocalNotification.clearMessage();
        LocalNotification.clearOrder();
    },
    closeNotification: function(n)
    {
        try {
            var id = "";
            if (LocalNotification.notificationMessage == n) {
                LocalNotification.notificationMessage = null;
                id = "messages";
            }
            else if (LocalNotification.notificationOrder == n) {
                LocalNotification.notificationOrder = null;
                id = "orders";
            }
        }
        catch{ }

        window.setTimeout(
            function () {
                switch (id) {
                    case "orders": app.route("orders"); break;
                    case "messages": app.route("messages"); break;
                    default: app.home(); break;
                }
            }, 300
        );
    }
}
