//Real-World Example: Different types of notifications (email, SMS, push) created based on configuration.
class Notification {
    send() {
        throw new Error('method send() must be implemented')
    }
}
class EmailNotification extends Notification {
    send() {
        console.log('Sending Email Notification');
    }
}

class SMSNotification extends Notification {
    send() {
        console.log('Sending SMS Notification');
    }
}

class NotificationFactory {
    // Factory method to create notification instances
    static createNotification(type) {
        switch (type) {
            case 'email':
                return new EmailNotification()
            case 'sms':
                return new SMSNotification()
            default:
                throw new Error('Unknown notification type')
        }
    }
}

const email = NotificationFactory.createNotification('email')
email.send()

const sms = NotificationFactory.createNotification('sms')
sms.send()