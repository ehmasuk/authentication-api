const welcomeEmailTemlet = (sender, reciever) => {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>

        <style type="text/css">
            @media only screen and (min-width: 620px) {
                .u-row {
                    width: 600px !important;
                }
                .u-row .u-col {
                    vertical-align: top;
                }

                .u-row .u-col-100 {
                    width: 600px !important;
                }
            }

            @media (max-width: 620px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }
                .u-row {
                    width: 100% !important;
                }
                .u-col {
                    width: 100% !important;
                }
                .u-col > div {
                    margin: 0 auto;
                }
            }
            body {
                margin: 0;
                padding: 0;
            }

            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }

            p {
                margin: 0;
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }

            * {
                line-height: inherit;
            }

            a[x-apple-data-detectors="true"] {
                color: inherit !important;
                text-decoration: none !important;
            }

            @media (max-width: 480px) {
                .hide-mobile {
                    max-height: 0px;
                    overflow: hidden;
                    display: none !important;
                }
            }

            table,
            td {
                color: #000000;
            }
            #u_body a {
                color: #f1c40f;
                text-decoration: underline;
            }
            @media (max-width: 480px) {
                #u_content_heading_1 .v-font-size {
                    font-size: 22px !important;
                }
                #u_content_text_1 .v-container-padding-padding {
                    padding: 25px 20px 70px !important;
                }
                #u_content_text_1 .v-text-align {
                    text-align: justify !important;
                }
                #u_content_text_2 .v-container-padding-padding {
                    padding: 50px 20px 10px !important;
                }
                #u_content_menu_1 .v-padding {
                    padding: 5px 11px !important;
                }
                #u_content_text_3 .v-container-padding-padding {
                    padding: 10px 20px 50px !important;
                }
            }
        </style>

        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
    </head>

    <body class="clean-body u_body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #506791; color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
            id="u_body"
            style="
                border-collapse: collapse;
                table-layout: fixed;
                border-spacing: 0;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                vertical-align: top;
                min-width: 320px;
                margin: 0 auto;
                background-color: #506791;
                width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
        >
            <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #506791;"><![endif]-->

                        <div class="u-row-container" style="padding: 0px; background-color: transparent">
                            <div
                                class="u-row"
                                style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent"
                            >
                                <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent">
                                    <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top">
                                        <div style="background-color: #506791; height: 100%; width: 100% !important">
                                            <!--[if (!mso)&(!IE)]><!--><div
                                                style="
                                                    box-sizing: border-box;
                                                    height: 100%;
                                                    padding: 0px;
                                                    border-top: 0px solid transparent;
                                                    border-left: 0px solid transparent;
                                                    border-right: 0px solid transparent;
                                                    border-bottom: 0px solid transparent;
                                                "
                                            ><!--<![endif]-->
                                                <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 0px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                    <tr></tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>

                        <div class="u-row-container" style="padding: 0px; background-color: transparent">
                            <div
                                class="u-row"
                                style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent"
                            >
                                <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                    <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top">
                                        <div style="background-color: #7b97bc; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
                                            <!--[if (!mso)&(!IE)]><!--><div
                                                style="
                                                    box-sizing: border-box;
                                                    height: 100%;
                                                    padding: 0px;
                                                    border-top: 0px solid transparent;
                                                    border-left: 0px solid transparent;
                                                    border-right: 0px solid transparent;
                                                    border-bottom: 0px solid transparent;
                                                    border-radius: 0px;
                                                    -webkit-border-radius: 0px;
                                                    -moz-border-radius: 0px;
                                                "
                                            ><!--<![endif]-->
                                                <table
                                                    id="u_content_heading_1"
                                                    style="font-family: 'Open Sans', sans-serif"
                                                    role="presentation"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    border="0"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 50px 10px 20px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                                                <h1
                                                                    class="v-text-align v-font-size"
                                                                    style="
                                                                        margin: 0px;
                                                                        color: #ffffff;
                                                                        line-height: 140%;
                                                                        text-align: center;
                                                                        word-wrap: break-word;
                                                                        font-family: 'Rubik', sans-serif;
                                                                        font-size: 26px;
                                                                        font-weight: 400;
                                                                    "
                                                                >
                                                                    <div><strong>THANKS FOR REGISTERING</strong><br /><strong>WITH MY API</strong></div>
                                                                </h1>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_text_1" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 25px 50px 70px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <div
                                                                    class="v-text-align v-font-size"
                                                                    style="font-size: 14px; color: #ffffff; line-height: 160%; text-align: justify; word-wrap: break-word"
                                                                >
                                                                    <p style="font-size: 14px; line-height: 160%">
                                                                        <span style="font-size: 16px; line-height: 25.6px"><strong>${reciever}</strong></span>
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 160%"> </p>
                                                                    <p style="font-size: 14px; line-height: 160%">
                                                                        Lucas, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit,
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 160%"> </p>
                                                                    <p style="font-size: 14px; line-height: 160%">
                                                                        Sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                                                        viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 160%">
                                                                        Accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Kindly treat this
                                                                        as an emergency.
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 160%"> </p>
                                                                    <p style="font-size: 14px; line-height: 160%"><strong>${sender}</strong></p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>

                        <div class="u-row-container" style="padding: 0px; background-color: transparent">
                            <div
                                class="u-row"
                                style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent"
                            >
                                <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent">
                                    <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top">
                                        <div style="background-color: #506791; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
                                            <!--[if (!mso)&(!IE)]><!--><div
                                                style="
                                                    box-sizing: border-box;
                                                    height: 100%;
                                                    padding: 0px;
                                                    border-top: 0px solid transparent;
                                                    border-left: 0px solid transparent;
                                                    border-right: 0px solid transparent;
                                                    border-bottom: 0px solid transparent;
                                                    border-radius: 0px;
                                                    -webkit-border-radius: 0px;
                                                    -moz-border-radius: 0px;
                                                "
                                            ><!--<![endif]-->
                                                <table id="u_content_text_2" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 70px 80px 10px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <div
                                                                    class="v-text-align v-font-size"
                                                                    style="font-size: 14px; color: #ecf0f1; line-height: 140%; text-align: center; word-wrap: break-word"
                                                                >
                                                                    <p style="font-size: 14px; line-height: 140%">
                                                                        if you have any questions, please email us at
                                                                        <a rel="noopener" href="#" target="_blank">ehmasuk@gmail.com</a> or visit our FAQS, you can
                                                                        also chat with a reel live human during our operating hours. They can answer questions about your account
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 20px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <table
                                                                    height="0px"
                                                                    align="center"
                                                                    border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    width="63%"
                                                                    style="
                                                                        border-collapse: collapse;
                                                                        table-layout: fixed;
                                                                        border-spacing: 0;
                                                                        mso-table-lspace: 0pt;
                                                                        mso-table-rspace: 0pt;
                                                                        vertical-align: top;
                                                                        border-top: 1px solid #95a5a6;
                                                                        -ms-text-size-adjust: 100%;
                                                                        -webkit-text-size-adjust: 100%;
                                                                    "
                                                                >
                                                                    <tbody>
                                                                        <tr style="vertical-align: top">
                                                                            <td
                                                                                style="
                                                                                    word-break: break-word;
                                                                                    border-collapse: collapse !important;
                                                                                    vertical-align: top;
                                                                                    font-size: 0px;
                                                                                    line-height: 0px;
                                                                                    mso-line-height-rule: exactly;
                                                                                    -ms-text-size-adjust: 100%;
                                                                                    -webkit-text-size-adjust: 100%;
                                                                                "
                                                                            >
                                                                                <span>&#160;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <div align="center">
                                                                    <div style="display: table; max-width: 187px"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_menu_1" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <div class="menu" style="text-align: center">
                                                                    <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->

                                                                    <a
                                                                        href="#"
                                                                        target="_self"
                                                                        style="
                                                                            padding: 5px 15px;
                                                                            display: inline-block;
                                                                            color: #ffffff;
                                                                            font-family: 'Open Sans', sans-serif;
                                                                            font-size: 14px;
                                                                            text-decoration: none;
                                                                        "
                                                                        class="v-padding v-font-size"
                                                                    >
                                                                        Home
                                                                    </a>

                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
                                                                    <span
                                                                        style="padding: 5px 15px; display: inline-block; color: #ffffff; font-family: 'Open Sans', sans-serif; font-size: 14px"
                                                                        class="v-padding v-font-size hide-mobile"
                                                                    >
                                                                        |
                                                                    </span>
                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->

                                                                    <a
                                                                        href="#"
                                                                        target="_self"
                                                                        style="
                                                                            padding: 5px 15px;
                                                                            display: inline-block;
                                                                            color: #ffffff;
                                                                            font-family: 'Open Sans', sans-serif;
                                                                            font-size: 14px;
                                                                            text-decoration: none;
                                                                        "
                                                                        class="v-padding v-font-size"
                                                                    >
                                                                        Page
                                                                    </a>

                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
                                                                    <span
                                                                        style="padding: 5px 15px; display: inline-block; color: #ffffff; font-family: 'Open Sans', sans-serif; font-size: 14px"
                                                                        class="v-padding v-font-size hide-mobile"
                                                                    >
                                                                        |
                                                                    </span>
                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->

                                                                    <a
                                                                        href="#"
                                                                        target="_self"
                                                                        style="
                                                                            padding: 5px 15px;
                                                                            display: inline-block;
                                                                            color: #ffffff;
                                                                            font-family: 'Open Sans', sans-serif;
                                                                            font-size: 14px;
                                                                            text-decoration: none;
                                                                        "
                                                                        class="v-padding v-font-size"
                                                                    >
                                                                        About Us
                                                                    </a>

                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
                                                                    <span
                                                                        style="padding: 5px 15px; display: inline-block; color: #ffffff; font-family: 'Open Sans', sans-serif; font-size: 14px"
                                                                        class="v-padding v-font-size hide-mobile"
                                                                    >
                                                                        |
                                                                    </span>
                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->

                                                                    <a
                                                                        href="#"
                                                                        target="_self"
                                                                        style="
                                                                            padding: 5px 15px;
                                                                            display: inline-block;
                                                                            color: #ffffff;
                                                                            font-family: 'Open Sans', sans-serif;
                                                                            font-size: 14px;
                                                                            text-decoration: none;
                                                                        "
                                                                        class="v-padding v-font-size"
                                                                    >
                                                                        Contact Us
                                                                    </a>

                                                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                                                    <!--[if (mso)|(IE)]></tr></table><![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_text_3" style="font-family: 'Open Sans', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                class="v-container-padding-padding"
                                                                style="overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 70px; font-family: 'Open Sans', sans-serif"
                                                                align="left"
                                                            >
                                                                <div
                                                                    class="v-text-align v-font-size"
                                                                    style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word"
                                                                >
                                                                    <p style="font-size: 14px; line-height: 140%">
                                                                        you have received this email as a registered user of
                                                                        <a rel="noopener" href="#" target="_blank">ehmasuk</a>
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 140%">
                                                                        can <a rel="noopener" href="#" target="_blank">unsubscribe</a> from these emails here.
                                                                    </p>
                                                                    <p style="font-size: 14px; line-height: 140%"> </p>
                                                                    <p style="font-size: 14px; line-height: 140%">2261 Market Street #4667 San Francisco, CA 94114 All rights reserved</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>

`;
};

module.exports = { welcomeEmailTemlet };
