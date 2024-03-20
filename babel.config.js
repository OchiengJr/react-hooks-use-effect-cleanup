module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    // Include class properties plugin if needed
    // "@babel/plugin-proposal-class-properties"
  ]
};
