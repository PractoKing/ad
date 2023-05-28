// MainActivity.java

// package com.example.gridurl;
// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.net.Uri;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//     }
//     public void openGoogle(View view) {
//         String url = "https://www.google.com";
//         openUrl(url);
//     }

//     public void openFacebook(View view) {
//         String url = "https://www.facebook.com";
//         openUrl(url);
//     }

//     // Add more methods for other URLs

//     private void openUrl(String url) {
//         Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
//         startActivity(intent);
//     }
// }

// 00000000000000000000000000000

// activity_main.xml
// <?xml version="1.0" encoding="utf-8"?>
// <GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:columnCount="2">

//     <Button
//         android:id="@+id/buttonGoogle"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Google"
//         android:onClick="openGoogle" />

//     <Button
//         android:id="@+id/buttonFacebook"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Facebook"
//         android:onClick="openFacebook" />

//     <!-- Add more buttons for other URLs -->

// </GridLayout>
