// XML FILE
// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:gravity="center"
//     android:orientation="vertical"
//     tools:context=".MainActivity">

//     <Button
//         android:id="@+id/buttonGoogle"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Open Google" />

//     <Button
//         android:id="@+id/buttonOpenAI"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Open OpenAI" />

//     <Button
//         android:id="@+id/buttonGitHub"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Open GitHub" />

// </LinearLayout>

// 0000000000000000000000000000000000000000000000000000000000000000000000000

// JAVA FILE

// import android.content.Intent;
// import android.net.Uri;
// import android.os.Bundle;
// import android.view.View;
// import android.widget.Button;

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         Button buttonGoogle = findViewById(R.id.buttonGoogle);
//         Button buttonOpenAI = findViewById(R.id.buttonOpenAI);
//         Button buttonGitHub = findViewById(R.id.buttonGitHub);

//         buttonGoogle.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 openUrlInBrowser("https://www.google.com");
//             }
//         });

//         buttonOpenAI.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 openUrlInBrowser("https://www.openai.com");
//             }
//         });

//         buttonGitHub.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 openUrlInBrowser("https://www.github.com");
//             }
//         });
//     }

//     private void openUrlInBrowser(String url) {
//         Intent intent = new Intent(Intent.ACTION_VIEW);
//         intent.setData(Uri.parse(url));
//         startActivity(intent);
//     }
// }
