/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// react-🔥-dom patch is not detected. React 16.6+ features may not work
//  https://stackoverflow.com/a/56093675/3461845
//  https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-469046186
//  https://stackoverflow.com/a/62221716/3461845
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
