import { AzureMonitorTraceExporter } from "@azure/monitor-opentelemetry-exporter";
import { registerOTel, SpanExporterOrName } from "@vercel/otel";

export function register() {
  registerOTel({
    serviceName: "buttercup-next",
    traceExporter: new AzureMonitorTraceExporter({
      connectionString: process.env.APP_INSIGHTS_CONNECTION_STRING,
    }) as unknown as SpanExporterOrName,
  });
}
