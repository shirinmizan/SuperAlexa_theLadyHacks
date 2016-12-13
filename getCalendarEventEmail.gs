function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function doSomething() {
 var today = new Date();
 var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);

 // Get the email address of the active user - that's you.
 var email = Session.getActiveUser().getEmail();
  
 //make sure there are no duplicate emails sent
for(var i=0;i<events.length;i++){
  var event = events[i];
  event.addEmailReminder(0);
  event.addPopupReminder(0);
  
 // Get the name of the document to use as an email subject line.
 var subject = event.getTitle();
  
 var body = event.getDescription();
  
//send the email at a certain time
GmailApp.sendEmail(email,subject, body);
  }

}
