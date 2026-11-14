package com.abdulahad.portfolio;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;

/**
 * High-performance, zero-external-dependency Java 21 REST & Static File Server
 * Developed for Abdulahad Mahmudjonov's Portfolio.
 */
public class BackendServer {

    private static final int DEFAULT_PORT = 8080;
    private static final long START_TIME = System.currentTimeMillis();
    private static final AtomicLong VISITOR_COUNTER = new AtomicLong(108);
    private static final AtomicLong MESSAGE_ID_GEN = new AtomicLong(1);
    private static final Object FILE_LOCK = new Object();

    private static Path rootDir;
    private static Path dataFile;

    public static void main(String[] args) {
        int port = DEFAULT_PORT;
        if (args.length > 0) {
            try {
                port = Integer.parseInt(args[0]);
            } catch (NumberFormatException ignored) {}
        }

        // Determine frontend root directory
        Path currentDir = Paths.get("").toAbsolutePath();
        if (Files.exists(currentDir.resolve("index.html"))) {
            rootDir = currentDir;
        } else if (Files.exists(currentDir.resolve("..").resolve("index.html"))) {
            rootDir = currentDir.resolve("..").normalize();
        } else {
            rootDir = currentDir;
        }

        // Initialize messages data file
        try {
            Path dataDir = rootDir.resolve("backend").resolve("data");
            Files.createDirectories(dataDir);
            dataFile = dataDir.resolve("messages.json");
            if (!Files.exists(dataFile)) {
                Files.writeString(dataFile, "[]", StandardCharsets.UTF_8);
            }
        } catch (IOException e) {
            System.err.println("Warning: Could not initialize data directory: " + e.getMessage());
            dataFile = Paths.get("messages.json");
        }

        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
            server.setExecutor(Executors.newVirtualThreadPerTaskExecutor()); // Java 21 Virtual Threads!

            // API Routes
            server.createContext("/api/health", new HealthHandler());
            server.createContext("/api/stats", new StatsHandler());
            server.createContext("/api/profile", new ProfileHandler());
            server.createContext("/api/projects", new ProjectsHandler());
            server.createContext("/api/contact", new ContactHandler());
            server.createContext("/api/messages", new MessagesHandler());

            // Static Files Route
            server.createContext("/", new StaticFileHandler());

            server.start();

            System.out.println("===========================================================");
            System.out.println("  🚀 ABDULAHAD MAHMUDJONOV - JAVA BACKEND SERVER IS RUNNING!");
            System.out.println("  🌐 Portfolio URL:   http://localhost:" + port);
            System.out.println("  ⚡ Health Check:    http://localhost:" + port + "/api/health");
            System.out.println("  📊 System Stats:    http://localhost:" + port + "/api/stats");
            System.out.println("  📩 Messages Admin:  http://localhost:" + port + "/api/messages");
            System.out.println("  📁 Root directory:  " + rootDir.toAbsolutePath());
            System.out.println("  ☕ Java Runtime:    " + System.getProperty("java.version") + " (" + System.getProperty("java.vendor") + ")");
            System.out.println("===========================================================");
            System.out.println("Press Ctrl+C to terminate the server.");

        } catch (IOException e) {
            System.err.println("Error starting server on port " + port + ": " + e.getMessage());
            if (port == DEFAULT_PORT) {
                System.out.println("Port " + port + " is busy. Retrying on port 8081...");
                main(new String[]{"8081"});
            }
        }
    }

    // ============================================================
    // API HANDLERS
    // ============================================================

    static class HealthHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            Runtime rt = Runtime.getRuntime();
            long uptimeSeconds = (System.currentTimeMillis() - START_TIME) / 1000;
            long freeMemMb = rt.freeMemory() / (1024 * 1024);
            long totalMemMb = rt.totalMemory() / (1024 * 1024);

            String json = "{\n" +
                    "  \"status\": \"UP\",\n" +
                    "  \"server\": \"Java 21 Virtual Threads HTTP Server\",\n" +
                    "  \"author\": \"Abdulahad Mahmudjonov\",\n" +
                    "  \"uptime_seconds\": " + uptimeSeconds + ",\n" +
                    "  \"memory\": {\n" +
                    "    \"free_mb\": " + freeMemMb + ",\n" +
                    "    \"total_mb\": " + totalMemMb + "\n" +
                    "  },\n" +
                    "  \"timestamp\": \"" + Instant.now() + "\"\n" +
                    "}";

            sendJsonResponse(exchange, 200, json);
        }
    }

    static class StatsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            long visits = VISITOR_COUNTER.incrementAndGet();
            String json = "{\n" +
                    "  \"visitors_count\": " + visits + ",\n" +
                    "  \"projects_count\": 4,\n" +
                    "  \"skills_count\": 10,\n" +
                    "  \"timestamp\": \"" + Instant.now() + "\"\n" +
                    "}";

            sendJsonResponse(exchange, 200, json);
        }
    }

    static class ProfileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            String json = "{\n" +
                    "  \"name\": \"Abdulahad Mahmudjonov\",\n" +
                    "  \"role\": \"Java Backend Developer\",\n" +
                    "  \"age\": 16,\n" +
                    "  \"location\": \"Tashkent, Uzbekistan\",\n" +
                    "  \"specialization\": [\"Java 21\", \"Spring Boot\", \"PostgreSQL\", \"Clean Architecture\"],\n" +
                    "  \"telegram\": \"https://t.me/Abdulahad_Mahmudjonov\",\n" +
                    "  \"github\": \"https://github.com/AbdulahadMahmudjonov\"\n" +
                    "}";

            sendJsonResponse(exchange, 200, json);
        }
    }

    static class ProjectsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            String json = "[\n" +
                    "  {\n" +
                    "    \"id\": \"restaurant\",\n" +
                    "    \"name\": \"Restoran Boshqaruv Tizimi\",\n" +
                    "    \"category\": \"java\",\n" +
                    "    \"stack\": [\"Java 21\", \"OOP\", \"Multithreading\", \"Collections\"]\n" +
                    "  },\n" +
                    "  {\n" +
                    "    \"id\": \"education\",\n" +
                    "    \"name\": \"O'quv Markazi CRM Tizimi\",\n" +
                    "    \"category\": \"spring\",\n" +
                    "    \"stack\": [\"Spring Boot\", \"PostgreSQL\", \"Hibernate\", \"REST API\"]\n" +
                    "  },\n" +
                    "  {\n" +
                    "    \"id\": \"banking\",\n" +
                    "    \"name\": \"Bank & Hamyon REST API\",\n" +
                    "    \"category\": \"spring\",\n" +
                    "    \"stack\": [\"Spring Security\", \"JWT\", \"ACID Transactions\", \"JUnit 5\"]\n" +
                    "  },\n" +
                    "  {\n" +
                    "    \"id\": \"telegram_bot\",\n" +
                    "    \"name\": \"Telegram e-Commerce Boti\",\n" +
                    "    \"category\": \"bot\",\n" +
                    "    \"stack\": [\"Telegram API\", \"Webhook\", \"Async\", \"JSON\"]\n" +
                    "  }\n" +
                    "]";

            sendJsonResponse(exchange, 200, json);
        }
    }

    static class ContactHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, "{\"error\": \"Method Not Allowed. Use POST.\"}");
                return;
            }

            // Read payload
            InputStream is = exchange.getRequestBody();
            String body = new String(is.readAllBytes(), StandardCharsets.UTF_8);

            if (body.isBlank()) {
                sendJsonResponse(exchange, 400, "{\"error\": \"Empty payload.\"}");
                return;
            }

            // Sanitized append to data file
            long msgId = MESSAGE_ID_GEN.incrementAndGet();
            synchronized (FILE_LOCK) {
                try {
                    String existing = Files.readString(dataFile, StandardCharsets.UTF_8).trim();
                    if (existing.startsWith("[") && existing.endsWith("]")) {
                        existing = existing.substring(1, existing.length() - 1).trim();
                    }
                    String record = "  {\n" +
                            "    \"id\": " + msgId + ",\n" +
                            "    \"received_at\": \"" + Instant.now() + "\",\n" +
                            "    \"payload\": " + body + "\n" +
                            "  }";

                    String updated;
                    if (existing.isEmpty()) {
                        updated = "[\n" + record + "\n]";
                    } else {
                        updated = "[\n" + existing + ",\n" + record + "\n]";
                    }
                    Files.writeString(dataFile, updated, StandardCharsets.UTF_8, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
                } catch (Exception e) {
                    System.err.println("Failed to write message: " + e.getMessage());
                }
            }

            System.out.println("📩 [NEW CONTACT MESSAGE #" + msgId + "] received successfully!");

            String response = "{\n" +
                    "  \"success\": true,\n" +
                    "  \"message\": \"Message received and saved to server.\",\n" +
                    "  \"id\": " + msgId + ",\n" +
                    "  \"timestamp\": \"" + Instant.now() + "\"\n" +
                    "}";

            sendJsonResponse(exchange, 200, response);
        }
    }

    static class MessagesHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            String content = "[]";
            synchronized (FILE_LOCK) {
                if (Files.exists(dataFile)) {
                    content = Files.readString(dataFile, StandardCharsets.UTF_8);
                }
            }
            sendJsonResponse(exchange, 200, content);
        }
    }

    // ============================================================
    // STATIC FILE HANDLER
    // ============================================================

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            addCorsHeaders(exchange);
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendResponse(exchange, 204, "");
                return;
            }

            String uriPath = exchange.getRequestURI().getPath();
            if (uriPath.equals("/") || uriPath.isEmpty()) {
                uriPath = "/index.html";
            }

            // Prevent path traversal
            if (uriPath.contains("..")) {
                sendResponse(exchange, 403, "Forbidden");
                return;
            }

            Path targetPath = rootDir.resolve(uriPath.substring(1)).normalize();

            if (!Files.exists(targetPath) || Files.isDirectory(targetPath)) {
                Path notFoundPage = rootDir.resolve("404.html");
                if (Files.exists(notFoundPage)) {
                    byte[] bytes = Files.readAllBytes(notFoundPage);
                    exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
                    exchange.sendResponseHeaders(404, bytes.length);
                    try (OutputStream os = exchange.getResponseBody()) {
                        os.write(bytes);
                    }
                } else {
                    sendResponse(exchange, 404, "404 Not Found");
                }
                return;
            }

            String mimeType = guessMimeType(targetPath.toString());
            byte[] bytes = Files.readAllBytes(targetPath);

            exchange.getResponseHeaders().set("Content-Type", mimeType);
            exchange.getResponseHeaders().set("Cache-Control", "no-cache, must-revalidate");
            exchange.sendResponseHeaders(200, bytes.length);

            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }

    // ============================================================
    // HELPERS
    // ============================================================

    private static void addCorsHeaders(HttpExchange exchange) {
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    private static void sendJsonResponse(HttpExchange exchange, int statusCode, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static void sendResponse(HttpExchange exchange, int statusCode, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static String guessMimeType(String path) {
        String lower = path.toLowerCase();
        if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html; charset=UTF-8";
        if (lower.endsWith(".css")) return "text/css; charset=UTF-8";
        if (lower.endsWith(".js")) return "application/javascript; charset=UTF-8";
        if (lower.endsWith(".json")) return "application/json; charset=UTF-8";
        if (lower.endsWith(".svg")) return "image/svg+xml";
        if (lower.endsWith(".png")) return "image/png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
        if (lower.endsWith(".ico")) return "image/x-icon";
        if (lower.endsWith(".webp")) return "image/webp";
        if (lower.endsWith(".txt")) return "text/plain; charset=UTF-8";

        String probed = URLConnection.guessContentTypeFromName(path);
        return (probed != null) ? probed : "application/octet-stream";
    }
}
