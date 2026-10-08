use objc2_app_kit::{NSWindow, NSWindowButton};
use tauri::Manager;

fn hide_traffic_lights(window: &tauri::WebviewWindow) {
    if let Ok(ptr) = window.ns_window() {
        let ns_window: &NSWindow = unsafe { &*(ptr as *const NSWindow) };
        for kind in [
            NSWindowButton::CloseButton,
            NSWindowButton::MiniaturizeButton,
            NSWindowButton::ZoomButton,
        ] {
            if let Some(button) = ns_window.standardWindowButton(kind) {
                button.setHidden(true);
            }
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            if let Some(w) = app.get_webview_window("main") {
                hide_traffic_lights(&w);
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}