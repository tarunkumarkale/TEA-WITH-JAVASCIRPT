
// why we write javascript inside body tag rather then inside head tag

// javascrit  in the head  tag excuited before  body html  part  over all  before browser render html  content

// if the script is larger or slow ,it can delay  the loading  and dispaly  of the page leading to poor user experinces

//2. deferd excuiton with dom
// javascript often interect with the  dom .  if the script run before the dom is fully loaded  it can lead  to errors like cannot read property of null

// 3. if  javascript is in head tag  can mix with prestation an bheviour  making the code harder to manage and debug . it s better to keep javascript in the external file