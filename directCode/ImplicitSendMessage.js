// MainActivity;

// package com.example.impsendmessage;

// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.net.Uri;
// import android.os.Bundle;
// import android.view.View;
// import android.widget.EditText;

// public class MainActivity extends AppCompatActivity {

//     EditText txt;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//     }
//     public void dial(View V)
//     {
//         txt = findViewById(R.id.text);
//         Uri u = Uri.parse("tel:" + txt.getText().toString());
//         Intent i = new Intent(Intent.ACTION_DIAL, u);
//         startActivity(i);
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

//     <EditText
//         android:id="@+id/text"
//         android:layout_width="280dp"
//         android:layout_height="60dp"
//         android:hint="enter number"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.351"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.245" />

//     <Button

//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Dial"
//         android:onClick="dial"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.498"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.544" />

// </androidx.constraintlayout.widget.ConstraintLayout>

// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// package com.example.implicitintentp3;

// import android.content.Intent;
// import android.os.Bundle;

// import com.google.android.material.snackbar.Snackbar;

// import androidx.appcompat.app.AppCompatActivity;

// import android.view.View;
// import android.widget.EditText;

// public class MainActivity extends AppCompatActivity {

//         private EditText editText;

//         @Override
//         protected void onCreate(Bundle savedInstanceState) {
//             super.onCreate(savedInstanceState);
//             setContentView(R.layout.activity_main);
//             editText = findViewById(R.id.editText);
//         }

//         public void sharedata (View view)
//         {
//             String data = editText.getText().toString();
//             Intent intent = new Intent(Intent.ACTION_SEND);
//             intent.setType("text/plain");
//             intent.putExtra(Intent.EXTRA_TEXT, data);
//             startActivity(Intent.createChooser(intent, "Share via"));
//         }
//     }

// xxxxxx
// <?xml version="1.0" encoding="utf-8"?>
// <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <EditText
//         android:id="@+id/editText"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:ems="10"
//         android:inputType="textPersonName"
//         android:text="Name" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_below="@+id/editText"
//         android:layout_alignParentBottom="true"
//         android:layout_marginTop="274dp"
//         android:layout_marginBottom="364dp"
//         android:text="Button"
//         android:onClick="sharedata"/>

// </RelativeLayout>
