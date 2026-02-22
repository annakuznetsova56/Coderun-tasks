module.exports = (str) => {
	let html = '';

	const strings = str.split(/^\s*[\r\n]/gm);

    strings.forEach((strItem) => {
        if(strItem.length<1) return;

        if(strItem.match(/=\s.+/)) {
            const head = strItem.slice(2);
            html = html + '<h1>' + head + '</h1>';
        } else if(strItem.match(/\*\s.+/)) {
            const items = strItem.split(/[\n\r]*\*\s/);
            html = html + '<ul>';
            items.forEach(item => {
                if(item.length>0) html = html + '<li>' + item + '</li>';
            });
            html = html + '</ul>';
        } else {
            html = html + '<p>';

           // for(let i = 0; i < strItem.length; i++) {
                const linkStart = strItem.search(/\(\(/);
                const linkEnd = strItem.search(/\)\)/);

                if(linkStart >= 0) {
                    html = html + strItem.slice(0, linkStart);
                    const linkText = strItem.slice(linkStart + 2, linkEnd).split(' ');
                    html = html + '<a href="' + linkText[0] + '">' + linkText[1] + '</a>';
                    html = html + strItem.slice(linkEnd + 2);
                   // i = linkEnd + 1;
                } else {
                    html = html + strItem;//.slice(i);
                   // i = strItem.length;
                }
            //}
    
            html = html + '</p>';
        }
    })

	return html;
};