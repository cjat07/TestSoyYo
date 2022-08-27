import { test } from '@japa/runner'

test('Entities filter', async({assert, client}) => {
  // Write your test here
  const response = await client.post('/entities/filter').form({parameters: '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'})
  //const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains([
    {
        "entityId": "0",
        "message": "Data not found"
    },
    {
        "entityId": 9,
        "name": "AidLive",
        "identificationNumber": "9012702138",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Martha Frias",
        "contactMail": "martha@soyyo.co",
        "ipAddress": "",
        "logo": "logo_entidad_aidlive.png",
        "domain": null
    },
    {
        "entityId": 10,
        "name": "Banco de Bogotá",
        "identificationNumber": "8600029644",
        "attributeValidator": null,
        "expirationDate": "2030-12-31",
        "contactName": "Darwin Rodríguez",
        "contactMail": "drodr25@bancodebogota.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_banco_bogota.png",
        "domain": null
    },
    {
        "entityId": 2,
        "name": "Bancolombia",
        "identificationNumber": "987654321",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Mauricio Serna Florez",
        "contactMail": "msflore@bancolombia.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_bancolombia.png",
        "domain": null
    },
    {
        "entityId": 5,
        "name": "Creditek",
        "identificationNumber": "123456789",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Angélica Loboguerrero",
        "contactMail": "jerson_je05@hotmail.com",
        "ipAddress": "",
        "logo": "logo_entidad_creditk.png",
        "domain": null
    },
    {
        "entityId": 8,
        "name": "Exponencial Confirming",
        "identificationNumber": "9005279603",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Anderson Franco",
        "contactMail": "anderson.franco@affirmatum.com",
        "ipAddress": "",
        "logo": "logo_entidad_exponencial-confirming.png",
        "domain": null
    },
    {
        "entityId": 3,
        "name": "Mi Aguila",
        "identificationNumber": "9008508671",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Manuela Castro",
        "contactMail": "manuela.castro@miaguila.com",
        "ipAddress": "",
        "logo": "",
        "domain": null
    },
    {
        "entityId": 4,
        "name": "Mi Entidad",
        "identificationNumber": "123409876",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Contacto DEMO",
        "contactMail": "contacto@demo.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_mi_entidad.png",
        "domain": null
    },
    {
        "entityId": 11,
        "name": "Plataforma Tecnológica Multiservicios (PTM)",
        "identificationNumber": "9002943698",
        "attributeValidator": null,
        "expirationDate": "2030-12-31",
        "contactName": "Meyre Mazo",
        "contactMail": "meyre.mazo@comercialcard.com",
        "ipAddress": "",
        "logo": null,
        "domain": null
    },
    {
        "entityId": 12,
        "name": "Redeban",
        "identificationNumber": "8300705271",
        "attributeValidator": null,
        "expirationDate": "2030-12-31",
        "contactName": "Camilo Rozo",
        "contactMail": "ocrozo@rbm.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_redeban.png",
        "domain": null
    },
    {
        "entityId": 6,
        "name": "SoyYo",
        "identificationNumber": "123456789",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Angélica Loboguerrero",
        "contactMail": "jerson_je05@hotmail.com",
        "ipAddress": "",
        "logo": "logo_entidad_soyyo.png",
        "domain": null
    },
    {
        "entityId": 7,
        "name": "Sufi Bancolombia",
        "identificationNumber": "8909039388",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Karen Montoya Vanegas",
        "contactMail": "karmonto@bancolombia.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_sufi.png",
        "domain": null
    },
    {
        "entityId": 13,
        "name": "Tiwala Rent SAS",
        "identificationNumber": "9016041601",
        "attributeValidator": null,
        "expirationDate": "2030-12-31",
        "contactName": "Maria Alejandra Saldarriaga Gomez",
        "contactMail": "masaldar@gmail.com",
        "ipAddress": "",
        "logo": null,
        "domain": null
    },
    {
        "entityId": 1,
        "name": "Tuya",
        "identificationNumber": "123456789",
        "attributeValidator": null,
        "expirationDate": "2030-10-27",
        "contactName": "Ana Maria Palacio",
        "contactMail": "APalacioH@tuya.com.co",
        "ipAddress": "",
        "logo": "logo_entidad_tuya.png",
        "domain": null
    },
    {
        "entityId": "14",
        "message": "Data not found"
    },
    {
        "entityId": "15",
        "message": "Data not found"
    },
    {
        "entityId": "16",
        "message": "Data not found"
    }
  ])

})
