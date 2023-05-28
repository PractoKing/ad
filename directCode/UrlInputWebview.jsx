// FirstFragment;
// package com.example.webview1;

// import android.os.Bundle;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;

// import androidx.annotation.NonNull;
// import androidx.fragment.app.Fragment;
// import androidx.navigation.fragment.NavHostFragment;

// import com.example.webview1.databinding.FragmentFirstBinding;

// public class FirstFragment extends Fragment {

//     private FragmentFirstBinding binding;

//     @Override
//     public View onCreateView(
//             LayoutInflater inflater, ViewGroup container,
//             Bundle savedInstanceState
//     ) {

//         binding = FragmentFirstBinding.inflate(inflater, container, false);
//         return binding.getRoot();

//     }

//     public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
//         super.onViewCreated(view, savedInstanceState);

//         binding.buttonFirst.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View view) {
//                 NavHostFragment.findNavController(FirstFragment.this)
//                         .navigate(R.id.action_FirstFragment_to_SecondFragment);
//             }
//         });
//     }

//     @Override
//     public void onDestroyView() {
//         super.onDestroyView();
//         binding = null;
//     }

// }

// MainActivity;
// package com.example.webview1;

// import android.content.Intent;
// import android.os.Bundle;
// import android.widget.Button;
// import android.widget.EditText;
// import androidx.appcompat.app.AppCompatActivity;
// public class MainActivity extends AppCompatActivity {
//     // define the variable
//     Button send_button;
//     EditText send_text;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         send_button = findViewById(R.id.send_button_id);
//         send_text = findViewById(R.id.send_text_id);
//         send_button.setOnClickListener(v -> {
//             String str = send_text.getText().toString();
//             Intent intent = new Intent(getApplicationContext(), WebViewActivity.class);
//             intent.putExtra("message", str);
//             // start the Intent
//             startActivity(intent);
//         });
//     }
// }

// SecondFragment;

// package com.example.webview1;

// import android.os.Bundle;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;

// import androidx.annotation.NonNull;
// import androidx.fragment.app.Fragment;
// import androidx.navigation.fragment.NavHostFragment;

// import com.example.webview1.databinding.FragmentSecondBinding;

// public class SecondFragment extends Fragment {

//     private FragmentSecondBinding binding;

//     @Override
//     public View onCreateView(
//             LayoutInflater inflater, ViewGroup container,
//             Bundle savedInstanceState
//     ) {

//         binding = FragmentSecondBinding.inflate(inflater, container, false);
//         return binding.getRoot();

//     }

//     public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
//         super.onViewCreated(view, savedInstanceState);

//         binding.buttonSecond.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View view) {
//                 NavHostFragment.findNavController(SecondFragment.this)
//                         .navigate(R.id.action_SecondFragment_to_FirstFragment);
//             }
//         });
//     }

//     @Override
//     public void onDestroyView() {
//         super.onDestroyView();
//         binding = null;
//     }

// }

// WebViewActivity;

// package com.example.webview1;

// import android.annotation.SuppressLint;
// import android.content.Intent;
// import android.os.Bundle;
// import android.webkit.WebSettings;
// import android.webkit.WebView;
// import android.webkit.WebViewClient;
// import android.widget.TextView;
// import androidx.appcompat.app.AppCompatActivity;
// public class WebViewActivity extends AppCompatActivity {

//     TextView msg;
//     private WebView webView;
//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_web_view);
//         msg=findViewById(R.id.received_value_id);
//         // create the get Intent object
//         Intent intent = getIntent();
//         String str =intent.getStringExtra("message");
//         webView = (WebView) findViewById(R.id.webView);
//         webView.setWebViewClient(new WebViewClient());
//         webView.loadUrl(str); ;
//         WebSettings webSettings = webView.getSettings();
//         webSettings.setJavaScriptEnabled(true);
//     }
// }
// 0000000000000000000000000000000000000000000000000000000000000000000

// activity_main.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <EditText
//         android:id="@+id/send_text_id"
//         android:layout_width="372dp"
//         android:layout_height="96dp"
//         android:layout_above="@+id/send_button_id"
//         android:layout_alignParentStart="true"
//         android:layout_marginStart="28dp"
//         android:layout_marginLeft="40dp"
//         android:layout_marginBottom="-90dp"
//         android:hint="Enter a URL"
//         android:textSize="25dp"
//         android:textStyle="bold" />

//     <Button
//         android:id="@+id/send_button_id"
//         android:layout_width="267dp"
//         android:layout_height="92dp"
//         android:layout_alignParentStart="true"
//         android:layout_alignParentEnd="true"
//         android:layout_alignParentBottom="true"
//         android:layout_marginStart="70dp"
//         android:layout_marginLeft="150dp"
//         android:layout_marginTop="150dp"
//         android:layout_marginEnd="74dp"
//         android:layout_marginBottom="225dp"
//         android:text="Open WebView"
//         android:textSize="20sp"
//         android:textStyle="bold" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:text="Web View" />
// </RelativeLayout>

// activity_web_view.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".WebViewActivity">
//     <TextView
//         android:id="@+id/received_value_id1"
//         android:layout_width="355dp"
//         android:layout_height="wrap_content"
//         android:layout_alignParentStart="true"
//         android:layout_marginStart="33dp"
//         android:layout_marginLeft="40dp"
//         android:layout_marginTop="80dp"
//         android:layout_marginBottom="40dp"
//         android:text="WebView Display"
//         android:textAlignment="center"
//         android:textSize="30dp"
//         android:textStyle="bold" />
//     <TextView
//         android:id="@+id/received_value_id"
//         android:layout_width="355dp"
//         android:layout_height="wrap_content"
//         android:layout_alignParentStart="true"
//         android:layout_alignParentBottom="true"
//         android:layout_marginStart="33dp"
//         android:layout_marginLeft="40dp"
//         android:layout_marginTop="200dp"
//         android:layout_marginBottom="408dp"
//         android:textSize="20dp"
//         android:textStyle="bold" />

//     <WebView
//         android:id="@+id/webView"
//         android:layout_width="310dp"
//         android:layout_height="550dp"
//         android:layout_alignParentStart="true"
//         android:layout_alignParentTop="true"
//         android:layout_alignParentEnd="true"
//         android:layout_alignParentBottom="true"
//         android:layout_marginStart="50dp"
//         android:layout_marginLeft="50dp"
//         android:layout_marginTop="128dp"
//         android:layout_marginEnd="51dp"
//         android:layout_marginBottom="53dp"/>

// </RelativeLayout>

// content_main.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     app:layout_behavior="@string/appbar_scrolling_view_behavior">

//     <fragment
//         android:id="@+id/nav_host_fragment_content_main"
//         android:name="androidx.navigation.fragment.NavHostFragment"
//         android:layout_width="0dp"
//         android:layout_height="0dp"
//         app:defaultNavHost="true"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:navGraph="@navigation/nav_graph" />
// </androidx.constraintlayout.widget.ConstraintLayout>

// fragment_first.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".FirstFragment">

//     <TextView
//         android:id="@+id/textview_first"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/hello_first_fragment"
//         app:layout_constraintBottom_toTopOf="@id/button_first"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent" />

//     <Button
//         android:id="@+id/button_first"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/next"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toBottomOf="@id/textview_first" />
// </androidx.constraintlayout.widget.ConstraintLayout>

// fragment_second.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".FirstFragment">

//     <TextView
//         android:id="@+id/textview_first"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/hello_first_fragment"
//         app:layout_constraintBottom_toTopOf="@id/button_first"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent" />

//     <Button
//         android:id="@+id/button_first"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/next"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toBottomOf="@id/textview_first" />
// </androidx.constraintlayout.widget.ConstraintLayout>
