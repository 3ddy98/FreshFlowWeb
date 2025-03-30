function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-16936450849/LVEACLbqkq8aEKH29os_',
      'transaction_id': '',
      'event_callback': callback
  });
  return false;
}
