export default function(server) {

server.respondWith( 'GET',
'http://askthem.dev//locator.json?q=05602',
  [
 200,
{"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=0, private, must-revalidate"},
"[{\"party\":\"Independent\",\"id\":\"529d6da369db306709000006\",\"full_name\":\"Bernard Sanders\",\"photo_url\":\"http://theunitedstates.io/images/congress/225x275/S000033.jpg\",\"state\":\"vt\",\"political_position_title\":\"United States Senate\",\"most_recent_district\":\"Vermont\"},{\"party\":\"Democrat\",\"id\":\"52e3d74d69db3094c5000009\",\"full_name\":\"Patrick J. Leahy\",\"photo_url\":\"http://data.opengovernment.org.s3.amazonaws.com/photos/federal/100x125/L000174.jpg\",\"state\":\"vt\",\"political_position_title\":\"United States Senate\",\"most_recent_district\":\"Vermont\"},{\"party\":\"Democrat\",\"id\":\"529d6da369db306709000008\",\"full_name\":\"Peter Welch\",\"photo_url\":\"http://data.opengovernment.org.s3.amazonaws.com/photos/federal/100x125/W000800.jpg\",\"state\":\"vt\",\"political_position_title\":\"United States House of Representatives VT\",\"most_recent_district\":\"Vermont\"},{\"party\":\"Democrat\",\"id\":\"529d6da369db306709000005\",\"full_name\":\"Peter Shumlin\",\"photo_url\":\"http://www.nga.org/files/live/sites/NGA/files/images/Govimages/VT-SHUMLIN.JPG\",\"state\":\"vt\",\"political_position_title\":\"Governor\",\"most_recent_district\":\"Vermont\"}]"
]);

server.respondWith( 'POST',
'http://askthem.dev/us/questions.json',
  [
 201,
{"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=0, private, must-revalidate"},
"{\"question\":{\"url\":\"/vt/questions/54fe2fa51ed4318c0d000011?share=true\"}}"
]);

}
