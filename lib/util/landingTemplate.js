// --- Mobile-Friendly Rebrand ---
// - Added the viewport meta tag for proper mobile scaling.
// - Switched to 'rem' units for scalable typography.
// - Updated #addon styles to be responsive by default.
// - Added a @media query to fine-tune styles for screens under 768px.

const STYLESHEET = `
* {
	box-sizing: border-box;
}

body,
html {
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100%;
}

html {
    background-color: #0a192f;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
    font-size: 16px; /* Set a base font size */
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
	font-family: 'Open Sans', Arial, sans-serif;
	color: #ccd6f6;
    line-height: 1.5;
    padding: 1em; /* Add some padding for small screens */
}

#addon {
    width: 90%; /* Use percentage for responsive width */
    max-width: 700px; /* Max width for larger screens */
    margin: auto;
    padding: 2em 3em;
    background: rgba(10, 25, 47, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.logo {
	height: 100px;
	width: 100px;
	margin: 0 auto 1.5em;
}

.logo img {
	width: 100%;
}

h1 {
	font-size: 2.5rem;
	font-weight: 700;
    text-align: center;
    color: #fff;
}

h2 {
	font-size: 1.1rem;
	font-weight: normal;
	font-style: italic;
	opacity: 0.8;
    text-align: center;
    margin-top: 0.5em;
}

h3 {
	font-size: 1.2rem;
    font-weight: 600;
    color: #64ffda;
    border-bottom: 1px solid #233554;
    padding-bottom: 0.5em;
    margin-top: 1.5em;
}

h1, h2, h3, p, label {
	margin: 0;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

a {
	color: #64ffda;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

a:hover {
    color: #fff;
}

ul {
    margin: 1em 0;
    padding-left: 20px;
    list-style: none;
}

li {
    margin-top: 0.5em;
    position: relative;
}

li::before {
    content: '▹';
    position: absolute;
    left: -20px;
    color: #64ffda;
}

.separator {
	margin: 2em 0;
    border: 0;
    height: 1px;
    background-color: #233554;
}

.form-element {
	margin-bottom: 1.5em;
}

.label-to-top {
    display: block;
    margin-bottom: 0.5em;
    font-weight: 600;
    color: #ccd6f6;
}

.full-width {
    width: 100%;
}

select, input[type="text"] {
    background-color: #112240;
    border: 1px solid #233554;
    color: #ccd6f6;
    padding: 0.8em;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.2s ease-in-out;
}

select:focus, input[type="text"]:focus {
    outline: none;
    border-color: #64ffda;
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin-top: 1em;
}

input[type="checkbox"] {
    margin-right: 10px;
    accent-color: #64ffda;
    width: 1.2em;
    height: 1.2em;
}

button {
	border: 1px solid #64ffda;
	outline: 0;
	color: #64ffda;
	background: transparent;
	padding: 0.8em 1.5em;
	margin: 1.5em auto 0;
	text-align: center;
	font-family: 'Open Sans', Arial, sans-serif;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	display: block;
	border-radius: 5px;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

button:hover {
	background-color: rgba(100, 255, 218, 0.1);
}

button:active {
	background-color: rgba(100, 255, 218, 0.2);
}

.copy-link-btn {
	font-size: 0.9rem;
	padding: 0.6em 1.2em;
	margin: 0.5em auto 0;
	background: transparent;
}

.toast {
	position: fixed;
	bottom: 2em;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(100, 255, 218, 0.9);
	color: #0a192f;
	padding: 1em 2em;
	border-radius: 5px;
	font-weight: 600;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	z-index: 1000;
	pointer-events: none;
}

.toast.show {
	opacity: 1;
}

.contact {
	text-align: center;
    margin-top: 2em;
    opacity: 0.7;
}

/* --- NEW: MEDIA QUERY FOR MOBILE DEVICES --- */
@media (max-width: 768px) {
    body {
        font-size: 14px; /* Slightly smaller base font on mobile */
        display: block; /* Let content flow from top */
    }

    #addon {
        width: 100%;
        max-width: none;
        padding: 2em 1.5em;
        margin: 0;
        border-radius: 0;
        border: none;
    }

    h1 {
        font-size: 2rem;
    }
}
`

function landingTemplate(manifest, config) {
    const background = 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2364ffda;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300A7B5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad)' d='M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C35,95 22.33,87.6 15,76 C25,85 40,85 50,80 C60,75 65,65 65,50 C65,35 55,25 40,25 C25,25 15,40 15,50 C15,55 16,60 18,64 C8.5,58 5,45 5,50 C5,25.15 25.15,5 50,5 Z'/%3E%3C/svg%3E";
    const contactHTML = manifest.contactEmail ?
        `<div class="contact">
            <p>Contact ${manifest.name} creator:</p>
            <a href="mailto:${manifest.contactEmail}">${manifest.contactEmail}</a>
        </div>` : ''

    let formHTML = ''
    let script = ''

	formHTML = `
	<form class="pure-form" id="mainForm">
		<div class="form-element">
			<label class="label-to-top">Debrid Services</label>
			<p style="opacity: 0.7; font-size: 0.9rem; margin-bottom: 1em;">Add one or more debrid services. All services will be queried simultaneously.</p>
			<div id="debridServicesContainer"></div>
			<button type="button" id="addServiceBtn" style="margin: 1em 0; padding: 0.5em 1em; font-size: 0.9rem;">+ Add Service</button>
		</div>

		<div class="form-element">
			<label class="label-to-top" for="Languages">Filter by Languages (optional)</label>
			<select id="Languages" name="Languages" class="full-width" multiple>
				<option value="en">🇬🇧 English</option>
				<option value="fr">🇫🇷 French</option>
				<option value="es">🇪🇸 Spanish</option>
				<option value="de">🇩🇪 German</option>
				<option value="it">🇮🇹 Italian</option>
				<option value="pt">🇵🇹 Portuguese</option>
				<option value="ru">🇷🇺 Russian</option>
				<option value="hi">🇮🇳 Hindi</option>
				<option value="ja">🇯🇵 Japanese</option>
				<option value="ko">🇰🇷 Korean</option>
				<option value="zh">🇨🇳 Chinese</option>
				<option value="ar">🇦🇪 Arabic</option>
				<option value="tr">🇹🇷 Turkish</option>
				<option value="nl">🇳🇱 Dutch</option>
				<option value="sv">🇸🇪 Swedish</option>
				<option value="no">🇳🇴 Norwegian</option>
				<option value="da">🇩🇰 Danish</option>
				<option value="fi">🇫🇮 Finnish</option>
				<option value="pl">🇵🇱 Polish</option>
				<option value="cs">🇨🇿 Czech</option>
				<option value="hu">🇭🇺 Hungarian</option>
				<option value="ro">🇷🇴 Romanian</option>
				<option value="el">🇬🇷 Greek</option>
				<option value="he">🇮🇱 Hebrew</option>
				<option value="th">🇹🇭 Thai</option>
			</select>
			<p style="opacity: 0.7; font-size: 0.9rem; margin-top: 0.5em;">Select one or more languages. If none are selected, no language filter is applied. Selecting English keeps English or unlabeled.</p>
		</div>

<!--		<div class="form-element checkbox-container">
			<input type="checkbox" id="ShowCatalog" name="ShowCatalog" value="true">
            <label for="ShowCatalog">Show Debrid Catalog on homepage</label>
		</div> -->
	</form>
	`

	script += `
	const mainForm = document.getElementById('mainForm');
	const installLink = document.getElementById('installLink');
	const container = document.getElementById('debridServicesContainer');
	const addServiceBtn = document.getElementById('addServiceBtn');

	let serviceIndex = 0;

	// Initialize with existing config or one empty service
	const existingServices = ${JSON.stringify(config.DebridServices || (config.DebridProvider ? [{ provider: config.DebridProvider, apiKey: config.DebridApiKey }] : [{ provider: 'RealDebrid', apiKey: '' }]))};

	const getDebridServices = () => {
		const services = [];
		const rows = container.querySelectorAll('[data-index]');
		rows.forEach(row => {
			const provider = row.querySelector('.debrid-provider').value;
			const apiKey = row.querySelector('.debrid-apikey').value;
			if (provider && apiKey) {
				services.push({ provider, apiKey });
			}
		});
		return services;
	};

	const updateLink = () => {
		const formData = new FormData(mainForm);
		const services = getDebridServices();

		const config = {
			DebridServices: services,
			Languages: formData.getAll('Languages')
		};

		// Backward compatibility: if only one service, also set old fields
		if (services.length === 1) {
			config.DebridProvider = services[0].provider;
			config.DebridApiKey = services[0].apiKey;
		} else if (services.length > 1) {
			// Use first service as primary for backwards compatibility
			config.DebridProvider = services[0].provider;
			config.DebridApiKey = services[0].apiKey;
		}

		if (services.length > 0 && services.every(s => s.provider && s.apiKey)) {
			installLink.href = 'stremio://' + window.location.host + '/' + encodeURIComponent(JSON.stringify(config)) + '/manifest.json';
		} else {
			installLink.href = '#';
		}
	};

	const createServiceRow = (provider = 'RealDebrid', apiKey = '') => {
		const index = serviceIndex++;
		const row = document.createElement('div');
		row.className = 'form-element';
		row.style.cssText = 'display: flex; gap: 1em; align-items: flex-start; margin-bottom: 1em; padding: 1em; background: rgba(35, 53, 84, 0.3); border-radius: 5px;';
		row.dataset.index = index;

		row.innerHTML = \`
			<div style="flex: 1;">
				<select class="debrid-provider full-width" style="margin-bottom: 0.5em;">
					<option value="RealDebrid">Real-Debrid</option>
					<option value="TorBox">TorBox</option>
					<option value="OffCloud">OffCloud</option>
					<option value="AllDebrid">AllDebrid</option>
					<option value="DebriderApp">Debrider.app</option>
					<option value="Premiumize">Premiumize</option>
				</select>
				<input type="text" class="debrid-apikey full-width" placeholder="Enter API key" required>
			</div>
			<button type="button" class="remove-service" style="padding: 0.5em 1em; font-size: 0.9rem; margin-top: 0;">Remove</button>
		\`;

		const select = row.querySelector('.debrid-provider');
		const input = row.querySelector('.debrid-apikey');
		const removeBtn = row.querySelector('.remove-service');

		select.value = provider;
		input.value = apiKey;

		select.addEventListener('change', updateLink);
		input.addEventListener('input', updateLink);
		removeBtn.addEventListener('click', () => {
			row.remove();
			updateLink();
		});

		container.appendChild(row);
		return row;
	};

	// Initialize services
	existingServices.forEach(service => {
		createServiceRow(service.provider, service.apiKey || '');
	});

	addServiceBtn.addEventListener('click', () => {
		createServiceRow();
		updateLink();
	});

	const languages = ${JSON.stringify(config.Languages) || '[]'};
	const languagesSelect = document.getElementById('Languages');
	for (const option of languagesSelect.options) {
		if (languages.includes(option.value)) {
			option.selected = true;
		}
	}

	installLink.onclick = (event) => {
		const services = getDebridServices();
		if (services.length === 0 || !services.every(s => s.provider && s.apiKey)) {
			event.preventDefault();
			alert('Please add at least one debrid service with a valid API key.');
		}
	}

	const copyLinkBtn = document.getElementById('copyLinkBtn');
	const toast = document.getElementById('toast');

	const showToast = () => {
		toast.classList.add('show');
		setTimeout(() => {
			toast.classList.remove('show');
		}, 2000);
	};

	copyLinkBtn.onclick = () => {
		const services = getDebridServices();
		if (services.length === 0 || !services.every(s => s.provider && s.apiKey)) {
			alert('Please add at least one debrid service with a valid API key.');
			return;
		}

		const manifestUrl = installLink.href.replace('stremio://', 'https://');

		navigator.clipboard.writeText(manifestUrl).then(() => {
			showToast();
		}).catch(err => {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = manifestUrl;
			textArea.style.position = 'fixed';
			textArea.style.left = '-999999px';
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand('copy');
				showToast();
			} catch (err) {
				alert('Failed to copy to clipboard');
			}
			document.body.removeChild(textArea);
		});
	};

	mainForm.oninput = updateLink;
	updateLink();
	`

    return `
	<!DOCTYPE html>
	<html style="background-image: url(${background});">

	<head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${manifest.name} | Stremio Addon</title>
		<style>${STYLESHEET}</style>
		<link rel="shortcut icon" href="${logo}" type="image/x-icon">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet">
	</head>

	<body>
		<div id="addon">
			<div class="logo">
			    <img src="${logo}">
			</div>
			<h1 class="name">${manifest.name}</h1>
			<h2 class="version">v${manifest.version || '0.0.0'} | ${manifest.description || ''}</h2>

            <hr class="separator">

			${formHTML}

            <hr class="separator">

            <h3>API Keys</h3>
            <p style="opacity: 0.8; margin-bottom: 1em;">Click the links below to get your API key from your debrid service provider:</p>
            <ul>
                <li><a href="https://real-debrid.com/apitoken" target="_blank">Real-Debrid API Key</a></li>
				<li><a href="https://torbox.app/settings" target="_blank">TorBox API Key</a></li>
                <li><a href="https://alldebrid.com/apikeys" target="_blank">AllDebrid API Key</a></li>
                <li><a href="https://www.premiumize.me/account" target="_blank">Premiumize API Key</a></li>
<!--                <li><a href="https://debrid-link.fr/webapp/apikey" target="_blank">Debrid.Link API Key</a></li> -->
    			<li><a href="https://offcloud.com/#/account" target="_blank">OffCloud API Key</a></li>
                <li><a href="https://debrider.app/dashboard/account" target="_blank">Debrider.app API Key</a></li>
            </ul>

            <p style="text-align: center; margin-top: 2em; opacity: 0.7;">Report any issues on <a href="https://github.com/sooti/stremio-addon-debrid-search" target="_blank">Github</a></p>

			<a id="installLink" class="install-link" href="#">
			    <button name="Install">INSTALL ADDON</button>
			</a>
			<button id="copyLinkBtn" class="copy-link-btn">COPY MANIFEST LINK</button>
			${contactHTML}
			<div id="toast" class="toast">Manifest link copied to clipboard!</div>
		</div>
		<script>
			${script}

			if (typeof updateLink === 'function')
			    updateLink();
			else
			    installLink.href = 'stremio://' + window.location.host + '/manifest.json';
		</script>
	</body>

	</html>`
}

export default landingTemplate
