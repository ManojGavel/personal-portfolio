import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newslatter from "./Newslatter";
import React from "react";

export default function MailChimFrom() {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          <Newslatter
            status={status}
            message={message}
            onValidate={(formData) => subscribe(formData)}
          />;
        }}
      />
       <Newslatter
            // status={status}
            // message={message}
            // onValidate={(formData) => subscribe(formData)}
          />
    </>
  );
}
