// MainActivity;

// package com.example.sharedata3a;

// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.Button;
// import android.widget.EditText;

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity {

//     EditText txt1,txt2,txt3,txt4;
//     Button b1;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         txt1 = findViewById(R.id.txt1);
//         txt2 = findViewById(R.id.txt2);
//         txt3 = findViewById(R.id.txt3);
//         txt4 = findViewById(R.id.txt4);

//         b1 = findViewById(R.id.button);

//         b1.setOnClickListener(view -> {
//             String str1 = txt1.getText().toString();
//             String str2 = txt2.getText().toString();
//             String str3 = txt3.getText().toString();
//             String str4 = txt4.getText().toString();

//             Intent i = new Intent(MainActivity.this,MainActivity2.class);
//             i.putExtra("name",str1);
//             i.putExtra("email",str2);
//             i.putExtra("phone",str3);
//             i.putExtra("roll",str4);
//             startActivity(i);
//         });
//     }
// }

// MainActivity2;

// package com.example.sharedata3a;
// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.Button;
// import android.widget.EditText;
// import android.widget.TextView;
// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity2 extends AppCompatActivity {

//     TextView t1,t2,t3,t4;
//     EditText txt5,txt6;
//     Button b1;
//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);
//         t1 = findViewById(R.id.txt1);
//         t2 = findViewById(R.id.txt2);
//         t3 = findViewById(R.id.txt3);
//         t4 = findViewById(R.id.txt4);

//         txt5 = findViewById(R.id.txt5);
//         txt6 = findViewById(R.id.txt6);
//         b1 = findViewById(R.id.button);

//         Intent i = getIntent();
//         if(i!=null)
//         {
//             String str1 = i.getStringExtra("name");
//             String str2 = i.getStringExtra("email");
//             String str3 = i.getStringExtra("phone");
//             String str4 = i.getStringExtra("roll");

//             t1.setText(str1);
//             t2.setText(str2);
//             t3.setText(str3);
//             t4.setText(str4);
//         }

//         b1.setOnClickListener(view -> {
//             String str5 = txt5.getText().toString();
//             String str6 = txt6.getText().toString();

//             Intent i1 = new Intent(MainActivity2.this,MainActivity3.class);
//             i1.putExtra("class",str5);
//             i1.putExtra("div",str6);
//             startActivity(i1);
//         });
//     }
// }

// MainActivity3;

// package com.example.sharedata3a;
// import androidx.appcompat.app.AppCompatActivity;
// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.TextView;

// public class MainActivity3 extends AppCompatActivity {
//     TextView t5,t6;
//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main3);

//         t5 = findViewById(R.id.txt5);
//         t6 = findViewById(R.id.txt6);

//         Intent i = getIntent();
//         if(i!=null)
//         {
//             String str5 = i.getStringExtra("class");
//             String str6 = i.getStringExtra("div");

//             t5.setText(str5);
//             t6.setText(str6);
//         }
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

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Name :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.044"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.159" />

//     <EditText
//         android:id="@+id/txt1"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your name"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.85"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.143" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Email :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.042"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.285" />

//     <EditText
//         android:id="@+id/txt2"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your email"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.85"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.273" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Phone :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.029"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.419" />

//     <EditText
//         android:id="@+id/txt3"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your phone number"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.85"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.414" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Roll no :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.029"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.556" />

//     <EditText
//         android:id="@+id/txt4"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your roll number"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.85"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.556" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Submit"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.754" />
// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_main2.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity2">

//     <TextView
//         android:id="@+id/txt1"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Name"
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.145" />

//     <TextView
//         android:id="@+id/txt2"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Email"
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.262" />

//     <TextView
//         android:id="@+id/txt3"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Phone"
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.377" />

//     <TextView
//         android:id="@+id/txt4"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Roll no."
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.499" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Class :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.082"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.626" />

//     <EditText
//         android:id="@+id/txt5"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your class"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.934"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.631" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Div :"
//         android:textSize="20dp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.11"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.759" />

//     <EditText
//         android:id="@+id/txt6"
//         android:layout_width="304dp"
//         android:layout_height="48dp"
//         android:hint="Enter your Division"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.934"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.762" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Submit"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.453"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.909" />

// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_main3.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity3">

//     <TextView
//         android:id="@+id/txt5"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Class"
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.145" />

//     <TextView
//         android:id="@+id/txt6"
//         android:layout_width="319dp"
//         android:layout_height="52dp"
//         android:hint="Division"
//         android:textSize="20dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.315"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.262" />

// </androidx.constraintlayout.widget.ConstraintLayout>
