type ZohoLeadData = {
    name: string;
    email: string;
    mobile: string;
};

const getZohoAccessToken = async (): Promise<string> => {
    const params = new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN || "",
        client_id: process.env.ZOHO_CLIENT_ID || "",
        client_secret: process.env.ZOHO_CLIENT_SECRET || "",
        grant_type: "refresh_token",
    });

    const response = await fetch(
        "https://accounts.zoho.in/oauth/v2/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        }
    );

    const data = await response.json();


    if (!response.ok || !data.access_token) {
        throw new Error(
            `Failed to get Zoho access token: ${JSON.stringify(data)}`
        );
    }

    return data.access_token;
};
export const sendLeadToZoho = async (
    lead: ZohoLeadData
): Promise<boolean> => {
    const accessToken = await getZohoAccessToken();

    const nameParts = lead.name.trim().split(" ");

    const firstName = nameParts[0];
    const lastName =
        nameParts.slice(1).join(" ") || firstName;

    const response = await fetch(
        "https://www.zohoapis.in/crm/v8/Leads",
        {
            method: "POST",
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    {
                        First_Name: firstName,
                        Last_Name: lastName,
                        Email: lead.email,
                        Mobile: lead.mobile,
                    },
                ],
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        console.error("Zoho lead creation failed:", data);

        throw new Error(
            `Failed to send lead to Zoho: ${JSON.stringify(data)}`
        );
    }

    console.log("Lead sent to Zoho successfully");

    return true;
};