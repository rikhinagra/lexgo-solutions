import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { fullName, workEmail, phoneNumber, companyName, recaptchaToken } = data;

        // Verify reCAPTCHA token with Google
        const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecretKey && recaptchaToken) {
            const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
            });
            const recaptchaResult = await recaptchaResponse.json();

            if (!recaptchaResult.success) {
                return NextResponse.json(
                    { status: 'error', message: 'reCAPTCHA verification failed' },
                    { status: 400 }
                );
            }
        }

        const timestamp = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'long'
        });

        // Send to Owner's Google Apps Script (saves to Sheet + sends Email)
        const ownerGoogleScriptUrl = process.env.OWNER_GOOGLE_SCRIPT_URL;
        if (ownerGoogleScriptUrl && ownerGoogleScriptUrl !== 'your_google_script_url_here') {
            try {
                await fetch(ownerGoogleScriptUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fullName, workEmail, phoneNumber, companyName, timestamp })
                });
            } catch (error) {
                console.error('Error sending to Owner Google Script:', error);
            }
        }

        // Send Telegram notification to OWNER
        const ownerBotToken = process.env.OWNER_TELEGRAM_BOT_TOKEN;
        const ownerChatId = process.env.OWNER_TELEGRAM_CHAT_ID;

        if (ownerBotToken && ownerChatId) {
            const ownerMessage = `🔔 <b>NEW CONTACT FORM SUBMISSION</b>

👤 <b>Name:</b> ${fullName}
📧 <b>Email:</b> ${workEmail}
📞 <b>Phone:</b> ${phoneNumber}
🏢 <b>Company:</b> ${companyName}
🕐 <b>Date:</b> ${timestamp}

<i>From: LexGo Solutions Website</i>`;

            try {
                await fetch(`https://api.telegram.org/bot${ownerBotToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: ownerChatId,
                        text: ownerMessage,
                        parse_mode: 'HTML'
                    })
                });
            } catch (error) {
                console.error('Error sending Telegram to Owner:', error);
            }
        }

        // Send Telegram notification to CLIENT
        const clientBotToken = process.env.CLIENT_TELEGRAM_BOT_TOKEN;
        const clientChatId = process.env.CLIENT_TELEGRAM_CHAT_ID;

        if (clientBotToken && clientChatId &&
            clientBotToken !== 'your_client_bot_token_here' &&
            clientChatId !== 'your_client_chat_id_here') {

            const clientMessage = `🔔 <b>NEW CONTACT FORM SUBMISSION</b>

👤 <b>Name:</b> ${fullName}
📧 <b>Email:</b> ${workEmail}
📞 <b>Phone:</b> ${phoneNumber}
🏢 <b>Company:</b> ${companyName}
🕐 <b>Date:</b> ${timestamp}

<i>From: LexGo Solutions Website</i>`;

            try {
                await fetch(`https://api.telegram.org/bot${clientBotToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: clientChatId,
                        text: clientMessage,
                        parse_mode: 'HTML'
                    })
                });
            } catch (error) {
                console.error('Error sending Telegram to Client:', error);
            }
        }

        // Send Telegram notification to MANAGER
        const managerBotToken = process.env.MANAGER_TELEGRAM_BOT_TOKEN;
        const managerChatId = process.env.MANAGER_TELEGRAM_CHAT_ID;

        if (managerBotToken && managerChatId &&
            managerBotToken !== 'your_manager_bot_token_here' &&
            managerChatId !== 'your_manager_chat_id_here') {

            const managerMessage = `🔔 <b>NEW CONTACT FORM SUBMISSION</b>

👤 <b>Name:</b> ${fullName}
📧 <b>Email:</b> ${workEmail}
📞 <b>Phone:</b> ${phoneNumber}
🏢 <b>Company:</b> ${companyName}
🕐 <b>Date:</b> ${timestamp}

<i>From: LexGo Solutions Website</i>`;

            try {
                await fetch(`https://api.telegram.org/bot${managerBotToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: managerChatId,
                        text: managerMessage,
                        parse_mode: 'HTML'
                    })
                });
            } catch (error) {
                console.error('Error sending Telegram to Manager:', error);
            }
        }

        return NextResponse.json({ status: 'success', message: 'Form submitted successfully' });

    } catch (error) {
        console.error('Error processing form submission:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to process form submission' },
            { status: 500 }
        );
    }
}
