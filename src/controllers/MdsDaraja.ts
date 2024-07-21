import exp from "constants";

export class MdsDaraja {
  token: string = "";

  constructor() {
    // generate ang set token
    this.getToken();
  }

  //   accepts cunsumer_key & consumer_secret to generate access_token
  async getToken(consumer_secret: string = "", consumer_key: string = "") {
    // Base64 encode consumer key and secret
    const auth = Buffer.from(
      `${consumer_key || process.env.DARAJA_CONSUMER_KEY}:${
        consumer_secret || process.env.DARAJA_CONSUMER_SECRET
      }`
    ).toString("base64");

    let headers = new Headers();
    headers.append("Authorization", `Basic ${auth}`);
    try {
      const res = await fetch(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        { headers }
      );
      if (!res.ok)
        throw Error(
          JSON.stringify({ status: res.status, message: res.statusText })
        );
      let data = await res.json();
      this.token = data?.access_token;
      return { ...data, sucess: true };
    } catch (error: any) {
      return { sucess: false, error: JSON.parse(error.message) };
    }
  }

  // ERROR HANDLER
  private errorHandler({ status, statusText }: any) {
    throw new Error(
      JSON.stringify({
        status,
        message: statusText,
      })
    );
  }
  //   c2b request
  async initiateC2BPayment(
    accessToken: string,
    shortcode: string,
    amount: number,
    msisdn: string,
    reference: string = Date.now.toString()
  ) {
    const endpoint = "https://api.safaricom.co.ke/mpesa/c2b/v1/simulate";

    const requestBody = {
      ShortCode: shortcode,
      CommandID: "CustomerPayBillOnline",
      Amount: amount,
      Msisdn: msisdn,
      BillRefNumber: reference,
    };

    try {
      const res = await fetch(endpoint, {
        body: JSON.stringify(requestBody),
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) return this.errorHandler(res);
      return { sucess: true, data: await res.json() };
    } catch (error: any) {
      //   throw new Error(
      console.log(`Failed to initiate C2B payment request: ${error}`);
      //   );
      return { sucess: false, error: JSON.parse(error) };
    }
  }
}

export const mdsDaraja = new MdsDaraja();
