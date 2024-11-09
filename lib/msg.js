const { proto, downloadContentFromMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')

const downloadMediaMessage = async(m, filename) => {
	
	
	if (m.type === 'imageMessage') {
		var nameJpg = filename ? filename + '.jpg' : 'undefined.jpg'
		

const sms = (conn, m) => 
	if (m.key) {
		m.id = m.key.id
		m.chat = m.key.remoteJid
		m.fromMe = m.key.fromMe
		m.isGroup = m.chat.endsWith('@g.us')
		m.sender = m.fromMe ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : m.isGroup ? m.key.participant : m.key.remoteJid
	
	if (m.message) {
		m.type = getContentType(m.message)
		m.msg = (m.type === 'viewOnceMessage') ? m.message[m.type].message[getContentType(m.message[m.type].message)] : m.message[m.type]
		if (m.msg) {
			if (m.type === 'viewOnceMessage') {
			m.msg.type = getContentType(m.message[m.type].message)
			
			 quotedMention = m.msg.contextInfo != null ? m.msg.contextInfo.participant : ''
			var tagMe = m.quoted.sender.split('@')[0].includes(conn.user.id.split(':')[0])
				m.quoted.msg = (m.quoted.type === 'viewOnceMessage') ? m.quoted[m.quoted.type].message[getContentType(m.quoted[m.quoted.type].message)] : m.quoted[m.quoted.type]
				if (m.quoted.type === 'viewOnceMessage') {
					m.quoted.msg.type = getContentType(m.quoted[m.quoted.type].message)
				}
				var quoted_quotedMention = m.quoted.msg.contextInfo != null ? m.quoted.msg.contextInfo.participant : ''
			:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'
		conn.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: m })
	
	react = (emoji) => conn.sendMessage(m.chat, { react: { text: emoji, key: m.key } })
	
	return m
}

module.exports = { sms,downloadMediaMessage }
