// // MainActivity;
// // package com.example.gridotheractivity;
// // import androidx.appcompat.app.AppCompatActivity;

// // import android.content.Intent;
// // import android.os.Bundle;
// // import android.view.View;

// // public class MainActivity extends AppCompatActivity {

// //     @Override
// //     protected void onCreate(Bundle savedInstanceState) {
// //         super.onCreate(savedInstanceState);
// //         setContentView(R.layout.activity_main);
// //     }

// //     public void onYt(View view)
// //     {
// //         Intent i = new Intent(getApplicationContext(),MainActivity2.class);
// //         startActivity(i);
// //     }

// //     public void onAmazon(View view)
// //     {
// //         Intent i = new Intent(getApplicationContext(),MainActivity3.class);
// //         startActivity(i);
// //     }

// //     public void onFK(View view)
// //     {
// //         Intent i = new Intent(getApplicationContext(),MainActivity4.class);
// //         startActivity(i);
// //     }

// //     public void onMeesho(View view)
// //     {
// //         Intent i = new Intent(getApplicationContext(),MainActivity5.class);
// //         startActivity(i);
// //     }
// // }

// // MainActivity2;
// // package com.example.gridotheractivity;

// // import androidx.appcompat.app.AppCompatActivity;

// // import android.os.Bundle;

// // public class MainActivity2 extends AppCompatActivity {

// //     @Override
// //     protected void onCreate(Bundle savedInstanceState) {
// //         super.onCreate(savedInstanceState);
// //         setContentView(R.layout.activity_main2);
// //     }
// // }
// // MainActivity3;

// // package com.example.gridotheractivity;

// // import androidx.appcompat.app.AppCompatActivity;

// // import android.os.Bundle;

// // public class MainActivity3 extends AppCompatActivity {

// //     @Override
// //     protected void onCreate(Bundle savedInstanceState) {
// //         super.onCreate(savedInstanceState);
// //         setContentView(R.layout.activity_main3);
// //     }
// // }

// // MainActivity4;
// // package com.example.gridotheractivity;

// // import androidx.appcompat.app.AppCompatActivity;

// // import android.os.Bundle;

// // public class MainActivity4 extends AppCompatActivity {

// //     @Override
// //     protected void onCreate(Bundle savedInstanceState) {
// //         super.onCreate(savedInstanceState);
// //         setContentView(R.layout.activity_main4);
// //     }
// // }

// // MainActivity5;
// // package com.example.gridotheractivity;

// // import androidx.appcompat.app.AppCompatActivity;

// // import android.os.Bundle;

// // public class MainActivity5 extends AppCompatActivity {

// //     @Override
// //     protected void onCreate(Bundle savedInstanceState) {
// //         super.onCreate(savedInstanceState);
// //         setContentView(R.layout.activity_main5);
// //     }
// // }

// // activity_main.xml;

// // <?xml version="1.0" encoding="utf-8"?>
// // <GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
// //     xmlns:app="http://schemas.android.com/apk/res-auto"
// //     xmlns:tools="http://schemas.android.com/tools"
// //     android:layout_width="match_parent"
// //     android:layout_height="match_parent"
// //     android:rowCount="2"
// //     android:columnCount="2"
// //     tools:context=".MainActivity">

// //     <ImageButton
// //         android:layout_width="188dp"
// //         android:layout_height="188dp"
// //         android:layout_rowSpan="0"
// //         android:layout_column="0"
// //         android:layout_margin="10dp"
// //         android:onClick="onYt"
// //         app:srcCompat="@drawable/youtube"
// //         tools:ignore="SpeakableTextPresentCheck" />

// //     <ImageButton
// //         android:layout_width="188dp"
// //         android:layout_height="188dp"
// //         android:layout_row="1"
// //         android:layout_rowSpan="1"
// //         android:layout_column="1"
// //         android:layout_margin="10dp"
// //         android:onClick="onAmazon"
// //         app:srcCompat="@drawable/social"
// //         tools:ignore="SpeakableTextPresentCheck" />

// //     <ImageButton
// //         android:layout_width="188dp"
// //         android:layout_height="188dp"
// //         android:layout_row="0"
// //         android:layout_column="1"
// //         android:layout_margin="10dp"
// //         android:onClick="onFK"
// //         app:srcCompat="@drawable/social__1_"
// //         tools:ignore="SpeakableTextPresentCheck" />

// //     <ImageButton
// //         android:layout_width="188dp"
// //         android:layout_height="188dp"
// //         android:layout_row="1"
// //         android:layout_column="0"
// //         android:layout_margin="10dp"
// //         android:onClick="onMeesho"
// //         app:srcCompat="@drawable/letter_m"
// //         tools:ignore="SpeakableTextPresentCheck" />

// // </GridLayout>

// // activity_main2.xml;

// // <?xml version="1.0" encoding="utf-8"?>
// // <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
// //     xmlns:app="http://schemas.android.com/apk/res-auto"
// //     xmlns:tools="http://schemas.android.com/tools"
// //     android:layout_width="match_parent"
// //     android:layout_height="match_parent"
// //     tools:context=".MainActivity2">

// //     <TextView
// //         android:layout_width="364dp"
// //         android:layout_height="238dp"
// //         android:layout_margin="10dp"
// //         android:text="YouTube is an American online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search."
// //         android:textColor="#000"
// //         android:textSize="20sp"
// //         android:textStyle="bold"
// //         app:layout_constraintBottom_toBottomOf="parent"
// //         app:layout_constraintEnd_toEndOf="parent"
// //         app:layout_constraintStart_toStartOf="parent"
// //         app:layout_constraintTop_toTopOf="parent"
// //         app:layout_constraintVertical_bias="0.499" />

// // </androidx.constraintlayout.widget.ConstraintLayout>

// // activity_main3.xml;

// // <?xml version="1.0" encoding="utf-8"?>
// // <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
// //     xmlns:app="http://schemas.android.com/apk/res-auto"
// //     xmlns:tools="http://schemas.android.com/tools"
// //     android:layout_width="match_parent"
// //     android:layout_height="match_parent"
// //     tools:context=".MainActivity3">

// //     <TextView
// //         android:layout_width="343dp"
// //         android:layout_height="211dp"
// //         android:layout_margin="10dp"
// //         android:text="Originally started as an online bookselling company, Amazon has morphed into an internet-based business enterprise that is largely focused on providing e-commerce, cloud computing, digital streaming and artificial intelligence (AI) services."
// //         android:textColor="#000"
// //         android:textSize="20sp"
// //         android:textStyle="bold"
// //         app:layout_constraintBottom_toBottomOf="parent"
// //         app:layout_constraintEnd_toEndOf="parent"
// //         app:layout_constraintStart_toStartOf="parent"
// //         app:layout_constraintTop_toTopOf="parent"
// //         app:layout_constraintVertical_bias="0.499" />

// // </androidx.constraintlayout.widget.ConstraintLayout>

// // activity_mai4.xml;

// // <?xml version="1.0" encoding="utf-8"?>
// // <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
// //     xmlns:app="http://schemas.android.com/apk/res-auto"
// //     xmlns:tools="http://schemas.android.com/tools"
// //     android:layout_width="match_parent"
// //     android:layout_height="match_parent"
// //     tools:context=".MainActivity4">

// //     <TextView
// //         android:layout_width="344dp"
// //         android:layout_height="244dp"
// //         android:layout_margin="10dp"
// //         android:text="Flipkart operates as an online marketplace that connects buyers and sellers across India. The company generates revenue through commission-based fees, logistics and fulfillment services, advertising, subscription-based services, and financial services."
// //         android:textColor="#000"
// //         android:textSize="20sp"
// //         android:textStyle="bold"
// //         app:layout_constraintBottom_toBottomOf="parent"
// //         app:layout_constraintEnd_toEndOf="parent"
// //         app:layout_constraintStart_toStartOf="parent"
// //         app:layout_constraintTop_toTopOf="parent"
// //         app:layout_constraintVertical_bias="0.499" />

// // </androidx.constraintlayout.widget.ConstraintLayout>

// // activity_main5.xml;

// // <?xml version="1.0" encoding="utf-8"?>
// // <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
// //     xmlns:app="http://schemas.android.com/apk/res-auto"
// //     xmlns:tools="http://schemas.android.com/tools"
// //     android:layout_width="match_parent"
// //     android:layout_height="match_parent"
// //     tools:context=".MainActivity4">

// //     <TextView
// //         android:layout_width="344dp"
// //         android:layout_height="244dp"
// //         android:layout_margin="10dp"
// //         android:text="Flipkart operates as an online marketplace that connects buyers and sellers across India. The company generates revenue through commission-based fees, logistics and fulfillment services, advertising, subscription-based services, and financial services."
// //         android:textColor="#000"
// //         android:textSize="20sp"
// //         android:textStyle="bold"
// //         app:layout_constraintBottom_toBottomOf="parent"
// //         app:layout_constraintEnd_toEndOf="parent"
// //         app:layout_constraintStart_toStartOf="parent"
// //         app:layout_constraintTop_toTopOf="parent"
// //         app:layout_constraintVertical_bias="0.499" />

// // </androidx.constraintlayout.widget.ConstraintLayout>

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNOOOOOOOOOOOTTTTTTTTTTTTTTTTHHHHHHHHHHHHHEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRR;
// AnotherActivity;

// package com.example.gridotheractivity;

// import androidx.appcompat.app.AppCompatActivity;

// import android.os.Bundle;

// public class AnotherActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_another);
//     }
// }

// MainActivity;

// package com.example.gridotheractivity;
// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//     }

//     public void goToAnotherActivity(View view) {
//         Intent intent = new Intent(this, AnotherActivity.class);
//         startActivity(intent);
//     }
// }

// activity_another;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".AnotherActivity">

// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_main;

// <?xml version="1.0" encoding="utf-8"?>
// <GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:id="@+id/gridLayout"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:columnCount="2">

//     <Button
//         android:id="@+id/button1"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Button 1"
//         android:onClick="goToAnotherActivity" />

//     <Button
//         android:id="@+id/button2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Button 2"
//         android:onClick="goToAnotherActivity" />

//     <!-- Add more buttons as needed -->

// </GridLayout>
