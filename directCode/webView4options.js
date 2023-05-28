// MainActivity.java;

// package com.example.webview4option;
// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.ImageButton;

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity {

//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         ImageButton bt1,bt2,bt3,bt4;
//         bt1 = findViewById(R.id.button);
//         bt2 = findViewById(R.id.button1);
//         bt3 = findViewById(R.id.button2);
//         bt4 = findViewById(R.id.button3);

//         bt1.setOnClickListener(view -> {
//             String str = "https://www.youtube.com";
//             Intent i = new Intent(getApplicationContext(),MainActivity2.class);
//             i.putExtra("bt1",str);
//             startActivity(i);
//         });

//         bt2.setOnClickListener(view -> {
//             String str1 = "https://www.amazon.in";
//             Intent i = new Intent(getApplicationContext(),MainActivity2.class);
//             i.putExtra("bt2",str1);
//             startActivity(i);
//         });

//         bt3.setOnClickListener(view -> {
//             String str1 = "https://www.flipkart.com";
//             Intent i = new Intent(getApplicationContext(),MainActivity2.class);
//             i.putExtra("bt3",str1);
//             startActivity(i);
//         });

//         bt4.setOnClickListener(view -> {
//             String str1 = "https://www.meesho.com";
//             Intent i = new Intent(getApplicationContext(),MainActivity2.class);
//             i.putExtra("bt4",str1);
//             startActivity(i);
//         });
//     }
// }

// MainActivity2;

// package com.example.webview4option;
// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.webkit.WebSettings;
// import android.webkit.WebView;
// import android.webkit.WebViewClient;
// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity2 extends AppCompatActivity {

//     @SuppressLint("SetJavaScriptEnabled")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);

//         Intent intent = getIntent();
//         String str = intent.getStringExtra("bt1");
//         String str1 = intent.getStringExtra("bt2");
//         String str2 = intent.getStringExtra("bt3");
//         String str3 = intent.getStringExtra("bt4");

//         WebView web = findViewById(R.id.web);
//         web.setWebViewClient(new WebViewClient());
//         web.loadUrl(str);
//         web.loadUrl(str1);
//         web.loadUrl(str2);
//         web.loadUrl(str3);
//         WebSettings webSettings = web.getSettings();
//         webSettings.setJavaScriptEnabled(true);
//     }
// }

// activity_main.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <ImageButton
//         android:id="@+id/button"
//         android:layout_width="150dp"
//         android:layout_height="100dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.13"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.202"
//         app:srcCompat="@drawable/youtube"
//         tools:ignore="SpeakableTextPresentCheck" />

//     <ImageButton
//         android:id="@+id/button1"
//         android:layout_width="242dp"
//         android:layout_height="151dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.497"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:srcCompat="@drawable/social"
//         tools:ignore="SpeakableTextPresentCheck" />

//     <ImageButton
//         android:id="@+id/button2"
//         android:layout_width="242dp"
//         android:layout_height="151dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.497"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.844"
//         app:srcCompat="@drawable/social__1_"
//         tools:ignore="SpeakableTextPresentCheck" />

//     <ImageButton
//         android:id="@+id/button3"
//         android:layout_width="150dp"
//         android:layout_height="100dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.858"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.202"
//         app:srcCompat="@drawable/letter_m"
//         tools:ignore="SpeakableTextPresentCheck" />

// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_main2.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity2">

//     <WebView
//         android:id="@+id/web"
//         android:layout_width="357dp"
//         android:layout_height="633dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.49"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.825" />

// </androidx.constraintlayout.widget.ConstraintLayout>
