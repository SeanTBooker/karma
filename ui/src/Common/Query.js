const QueryOperators = Object.freeze({
  Equal: "=",
  NotEqual: "!=",
  Regex: "=~",
});

const StaticLabels = Object.freeze({
  AlertName: "alertname",
  AlertManager: "@alertmanager",
  AlertmanagerCluster: "@cluster",
  Fingerprint: "@fingerprint",
  Receiver: "@receiver",
  State: "@state",
  SilenceID: "@silence_id",
});

function FormatQuery(name, operator, value) {
  return `${name}${operator}${value}`;
}

export { QueryOperators, StaticLabels, FormatQuery };
