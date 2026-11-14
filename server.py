#!/usr/bin/env python3
"""
Python alternative server for Abdulahad Mahmudjonov's Portfolio.
Serves static frontend files and provides mock REST API endpoints.
"""

import http.server
import socketserver
import os
import json
import socket
from datetime import datetime

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "backend", "data")
MESSAGES_FILE = os.path.join(DATA_DIR, "messages.json")

os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(MESSAGES_FILE):
    with open(MESSAGES_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            data = {
                "status": "UP",
                "server": "Python Micro-Service",
                "author": "Abdulahad Mahmudjonov",
                "timestamp": datetime.utcnow().isoformat()
            }
            self.wfile.write(json.dumps(data).encode('utf-8'))
            return

        if self.path == '/api/stats':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            data = {
                "visitors_count": 142,
                "projects_count": 4,
                "skills_count": 10,
                "timestamp": datetime.utcnow().isoformat()
            }
            self.wfile.write(json.dumps(data).encode('utf-8'))
            return

        return super().do_GET()

    def do_POST(self):
        if self.path == '/api/contact':
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            
            try:
                msg_data = json.loads(post_body.decode('utf-8'))
                msg_data["received_at"] = datetime.utcnow().isoformat()

                with open(MESSAGES_FILE, "r+", encoding="utf-8") as f:
                    try:
                        messages = json.load(f)
                    except:
                        messages = []
                    messages.append(msg_data)
                    f.seek(0)
                    json.dump(messages, f, indent=2, ensure_ascii=False)
                    f.truncate()

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {
                    "success": True,
                    "message": "Message successfully saved to server.",
                    "timestamp": datetime.utcnow().isoformat()
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f"[NEW MESSAGE] From: {msg_data.get('name')} ({msg_data.get('contact')})")
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    with socketserver.TCPServer(("", PORT), PortfolioHandler) as httpd:
        lan_ip = get_local_ip()
        print("===========================================================")
        print(f"  🚀 Portfolio Server is running!")
        print(f"  🌐 Kompyuterda (PC):   http://localhost:{PORT}")
        if lan_ip != "localhost" and not lan_ip.startswith("127."):
            print(f"  📱 Telifonda (Mobile): http://{lan_ip}:{PORT}  (Bir xil Wi-Fi tarmog'ida)")
        print("===========================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
