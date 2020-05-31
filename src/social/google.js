function onSignIn(googleUser) {
    console.log(googleUser);
    var profile = googleUser.getBasicProfile();
    console.table(profile);
    console.
    console.table(profile);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }