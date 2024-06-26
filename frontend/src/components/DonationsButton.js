import React from "react";

const DonationsButton = () => (
  <>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="VNK3WRYSUEVEA" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>

    {/* <div>
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=GPNK9HQK2FU9E"
        className="donations-button"
      >
        ❤️ Donate
      </a>
    </div> */}
  </>
);

export default DonationsButton;
