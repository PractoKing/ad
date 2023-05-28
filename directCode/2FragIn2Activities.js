// Fragment1;
// package com.example.a2activity2frag;

// import android.os.Bundle;
// import android.widget.Button;

// import androidx.appcompat.app.AppCompatActivity;
// import androidx.fragment.app.FragmentTransaction;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) { super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         Button button; button=findViewById(R.id.button);
//         button.setOnClickListener(v -> {
//             FragmentTransaction fragmentTransaction=getSupportFragmentManager().beginTransaction();
//             fragmentTransaction.replace(R.id.MainLayout,new Fragment1());
//             fragmentTransaction.addToBackStack(null);
//             fragmentTransaction.commit();
//         });
//     }

// }

// Fragment2
// package com.example.a2activity2frag;
// import android.os.Bundle;
// import androidx.fragment.app.Fragment;

// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;
// import android.widget.TextView;
// public class Fragment2 extends Fragment {
//     @Override
//     public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
//         View view=inflater.inflate(R.layout.fragment_2, container, false);
//         TextView t1,t2;
//         t1=view.findViewById(R.id.textView5);
//         t2=view.findViewById(R.id.textView6);
//         Bundle bundle=this.getArguments();
//         if(bundle!=null){
//             String name_inFragment=bundle.getString("name");
//             String number_inFragment=bundle.getString("number");
//             t1.setText(name_inFragment);
//             t2.setText(number_inFragment);
//         }

//         return view;
//     }
// }
// MainActivity.java

// package com.example.a2activity2frag;

// import android.os.Bundle;
// import android.widget.Button;

// import androidx.appcompat.app.AppCompatActivity;
// import androidx.fragment.app.FragmentTransaction;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) { super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         Button button; button=findViewById(R.id.button);
//         button.setOnClickListener(v -> {
//             FragmentTransaction fragmentTransaction=getSupportFragmentManager().beginTransaction();
//             fragmentTransaction.replace(R.id.MainLayout,new Fragment1());
//             fragmentTransaction.addToBackStack(null);
//             fragmentTransaction.commit();
//         });
//     }

// }
// MainActivity2
// package com.example.a2activity2frag;

// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.Button;

// import androidx.appcompat.app.AppCompatActivity;
// import androidx.fragment.app.FragmentTransaction;

// public class MainActivity2 extends AppCompatActivity {
//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);
//         Button button1;
//         button1=findViewById(R.id.button3);

//         button1.setOnClickListener(v -> {
//             Bundle bundle=new Bundle();
//             Intent intent=getIntent();
//             String name_inActivity2=intent.getStringExtra("name");
//             String number_inActivity2=intent.getStringExtra("number");
//             bundle.putString("name",name_inActivity2);
//             bundle.putString("number",number_inActivity2);

//             Fragment2 fragInfo = new Fragment2();
//             fragInfo.setArguments(bundle);
//             FragmentTransaction    transaction = getSupportFragmentManager().beginTransaction();
//             transaction.replace(R.id.MainLayout1, fragInfo);
//             transaction.commit();

//         });
//     }
// }
// 000000000000000000000000000000000000000000000000000000000

// activity_main.xml

// package com.example.a2activity2frag;

// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.Button;

// import androidx.appcompat.app.AppCompatActivity;
// import androidx.fragment.app.FragmentTransaction;

// public class MainActivity2 extends AppCompatActivity {
//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);
//         Button button1;
//         button1=findViewById(R.id.button3);

//         button1.setOnClickListener(v -> {
//             Bundle bundle=new Bundle();
//             Intent intent=getIntent();
//             String name_inActivity2=intent.getStringExtra("name");
//             String number_inActivity2=intent.getStringExtra("number");
//             bundle.putString("name",name_inActivity2);
//             bundle.putString("number",number_inActivity2);

//             Fragment2 fragInfo = new Fragment2();
//             fragInfo.setArguments(bundle);
//             FragmentTransaction    transaction = getSupportFragmentManager().beginTransaction();
//             transaction.replace(R.id.MainLayout1, fragInfo);
//             transaction.commit();

//         });
//     }
// }
// activity_main2.xml
// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:id="@+id/MainLayout1"
//     tools:context=".MainActivity2">

//     <Button
//         android:id="@+id/button3"
//         android:layout_width="130dp"
//         android:layout_height="50dp"
//         android:layout_marginStart="140dp"
//         android:layout_marginTop="16dp"
//         android:text="@string/show_result"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toBottomOf="@+id/textView8"
//         tools:ignore="TextSizeCheck" />

//     <TextView
//         android:id="@+id/textView6"
//         android:layout_width="201dp"
//         android:layout_height="33dp"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="124dp"
//         android:text=""
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toBottomOf="@+id/textView5" />

//     <TextView
//         android:id="@+id/textView5"
//         android:layout_width="204dp"
//         android:layout_height="34dp"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="164dp"
//         android:text=""
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toBottomOf="@+id/button3" />

//     <TextView
//         android:id="@+id/textView8"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginStart="72dp"
//         android:layout_marginTop="16dp"
//         android:text="@string/click_below_to_n_see_the_result"
//         android:textAlignment="center"
//         android:textSize="20sp"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         tools:ignore="VisualLintBounds" />
// </androidx.constraintlayout.widget.ConstraintLayout>

// fragment_1.xml
// <?xml version="1.0" encoding="utf-8"?>
// <FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:id="@+id/FrameLayout1"
//     tools:context=".Fragment1">

//     <TextView
//         android:id="@+id/textView2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginStart="20dp"
//         android:layout_marginTop="200dp"
//         android:textSize="20sp"
//         android:text="@string/name"
//         android:textAlignment="center" />

//     <TextView android:id="@+id/textView3"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginStart="20dp"
//         android:layout_marginTop="275dp"
//         android:textSize="20sp"
//         android:text="@string/roll_no"
//         />

//     <EditText android:id="@+id/editTextText"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="190dp"
//         android:ems="10"
//         android:inputType="text"
//         android:minHeight="48dp"
//         android:text=""
//         tools:ignore="LabelFor,SpeakableTextPresentCheck"
//         android:autofillHints="text" />

//     <EditText android:id="@+id/editTextNumber"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="270dp"
//         android:ems="10"
//         android:inputType="number"
//         android:minHeight="48dp"
//         tools:ignore="LabelFor,SpeakableTextPresentCheck"
//         android:autofillHints="" />

//     <Button
//         android:id="@+id/button2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/submit"
//         android:layout_marginStart="150dp"
//         android:layout_marginTop="360dp"/>

// </FrameLayout>

// fragment_2.xml
// <?xml version="1.0" encoding="utf-8"?>
// <FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".Fragment2">

//     <TextView
//         android:layout_width="75dp"
//         android:layout_height="41dp"
//         android:layout_marginStart="10dp"
//         android:layout_marginTop="300dp"
//         android:text="@string/name"
//         android:textSize="20sp"
//         tools:ignore="TextSizeCheck" />

//     <TextView
//         android:id="@+id/textView4"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/roll_no"
//         android:textSize="20sp"
//         android:layout_marginTop="380dp"
//         android:layout_marginStart="10dp"/>

//     <TextView
//         android:id="@+id/textView5"
//         android:layout_width="201dp"
//         android:layout_height="33dp"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="300dp"
//         android:text=""
//         android:textSize="20sp"/>

//     <TextView
//         android:id="@+id/textView6"
//         android:layout_width="204dp"
//         android:layout_height="34dp"
//         android:layout_marginStart="100dp"
//         android:layout_marginTop="380dp"
//         android:text=""
//         android:textSize="20sp"/>

//     <TextView
//         android:id="@+id/textView7"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/result"
//         android:textSize="40sp"
//         android:layout_marginStart="145dp"
//         android:layout_marginTop="180dp"/>
// </FrameLayout>
