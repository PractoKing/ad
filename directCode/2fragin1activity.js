// FirstFragment;
// package com.example.fragment;

// import android.os.Bundle;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;
// import android.widget.Button;
// import android.widget.EditText;

// import androidx.annotation.Nullable;
// import androidx.fragment.app.Fragment;
// import androidx.fragment.app.FragmentManager;
// import androidx.fragment.app.FragmentTransaction;

// public class FirstFragment extends Fragment {

//     EditText firstName,lastName;
//     Button submit;
//     @Nullable
//     @Override
//     public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState)
//     {
//         View rootView = inflater.inflate(R.layout.fragment_first,container,false);
//         firstName = (EditText) rootView.findViewById(R.id.firstname);
//         lastName = (EditText) rootView.findViewById(R.id.lastname);
//         submit = (Button) rootView.findViewById(R.id.button);

//         submit.setOnClickListener(view -> {
//             String first = firstName.getText().toString();
//             String last = lastName.getText().toString();

//             Bundle bundle = new Bundle();
//             bundle.putString("FirstName",first);
//             bundle.putString("LastName",last);

//             FragmentManager fragmentManager = requireActivity().getSupportFragmentManager();
//             FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();

//             SecondFragment secondFragment = new SecondFragment();
//             secondFragment.setArguments(bundle);
//             fragmentTransaction.replace(R.id.frame_container,secondFragment);
//             fragmentTransaction.commit();
//         });

//         return rootView;
//     }
// }

// MainActivity
// package com.example.fragment;

// import androidx.appcompat.app.AppCompatActivity;
// import androidx.fragment.app.FragmentManager;
// import androidx.fragment.app.FragmentTransaction;

// import android.os.Bundle;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         FragmentManager fragmentManager = getSupportFragmentManager();
//         FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
//         fragmentTransaction.replace(R.id.frame_container,new FirstFragment());
//         fragmentTransaction.commit();
//     }
// }
// SecondFragment
// package com.example.fragment;

// import android.os.Bundle;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;
// import android.widget.TextView;

// import androidx.annotation.Nullable;
// import androidx.fragment.app.Fragment;

// public class SecondFragment extends Fragment {

//     @Nullable
//     @Override
//     public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState)
//     {
//         View rootView = inflater.inflate(R.layout.fragment_second,container,false);

//         Bundle bundle = getArguments();

//         assert bundle != null;
//         String firstName = bundle.getString("FirstName");
//         String lastName = bundle.getString("LastName");

//         TextView firstText = (TextView) rootView.findViewById(R.id.firstname);
//         TextView lastText = (TextView) rootView.findViewById(R.id.lastname);

//         firstText.setText(firstName);
//         lastText.setText(lastName);
//         return rootView;
//     }
// }
// 00000000000000000000000000000000

// activity_main.xml
// <?xml version="1.0" encoding="utf-8"?>
// <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <FrameLayout
//         android:id="@+id/frame_container"
//         android:layout_width="match_parent"
//         android:layout_height="match_parent"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent">

//     </FrameLayout>
// </RelativeLayout>

// fragment_first.xml
// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:orientation="vertical">

//     <TextView
//         android:id="@+id/textView"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:gravity="center"
//         android:layout_marginTop="20dp"
//         android:text="@string/this_is_a_first_fragment"
//         android:textSize="20sp"
//         android:textStyle="bold"/>

//     <LinearLayout
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="10dp"
//         android:padding="10dp"
//         android:orientation="vertical">

//         <EditText
//             android:id="@+id/firstname"
//             android:layout_width="377dp"
//             android:layout_height="59dp"
//             android:hint="@string/first_name"
//             android:autofillHints="text"
//             android:inputType="textPersonName" />

//         <EditText
//             android:id="@+id/lastname"
//             android:layout_width="377dp"
//             android:layout_height="59dp"
//             android:hint="@string/last_name1"
//             android:autofillHints="text"
//             android:inputType="textPersonName"
//             />

//         <Button
//             android:id="@+id/button"
//             android:layout_width="wrap_content"
//             android:layout_height="wrap_content"
//             android:text="@string/submit" />

//     </LinearLayout>

// </LinearLayout>

// fragment_second

// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:orientation="vertical">

//     <TextView
//         android:id="@+id/textView2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/this_is_second_fragment1"
//         android:gravity="center"
//         android:layout_marginTop="20dp"
//         android:textSize="20sp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.498"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.193" />

//     <LinearLayout
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="10dp"
//         android:padding="10dp"
//         android:orientation="vertical">

//         <EditText
//             android:id="@+id/firstname"
//             android:layout_width="377dp"
//             android:layout_height="59dp"
//             android:autofillHints="text"
//             android:ems="10"
//             android:hint="@string/your_first_name"
//             android:inputType="textPersonName"
//             android:text=""
//             app:layout_constraintBottom_toBottomOf="parent"
//             app:layout_constraintEnd_toEndOf="parent"
//             app:layout_constraintHorizontal_bias="0.497"
//             app:layout_constraintStart_toStartOf="parent"
//             app:layout_constraintTop_toTopOf="parent"
//             app:layout_constraintVertical_bias="0.371" />

//         <EditText
//             android:id="@+id/lastname"
//             android:layout_width="377dp"
//             android:layout_height="59dp"
//             android:autofillHints="text"
//             android:ems="10"
//             android:hint="@string/your_last_name"
//             android:inputType="textPersonName"
//             android:text=""
//             app:layout_constraintBottom_toBottomOf="parent"
//             app:layout_constraintEnd_toEndOf="parent"
//             app:layout_constraintHorizontal_bias="0.497"
//             app:layout_constraintStart_toStartOf="parent"
//             app:layout_constraintTop_toTopOf="parent" />

//     </LinearLayout>

// </LinearLayout>
