// package com.example.myapplication;
// MainActivity.java

// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         View btnSendMessage = findViewById(R.id.btnSendMessage);

//         btnSendMessage.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 String message = "Hello, this is a sample message.";

//                 Intent intent = new Intent(Intent.ACTION_SEND);
//                 intent.setType("text/plain");
//                 intent.putExtra(Intent.EXTRA_TEXT, message);

//                 startActivity(Intent.createChooser(intent, "Send Message"));
//             }
//         });
//     }
// }

// activity.main.xml
// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <Button
//         android:id="@+id/btnSendMessage"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Send Message"
//         tools:ignore="MissingConstraints" />

// </androidx.constraintlayout.widget.ConstraintLayout>
