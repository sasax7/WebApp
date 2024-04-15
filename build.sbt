import sbt.Package.FixedTimestamp

name := """play-scala-react-seed"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    watchSources ++= (baseDirectory.value / "public/ui" ** "*").get,
    ThisBuild / packageOptions += FixedTimestamp(Package.keepTimestamps)
  )

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.13.13"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.1.0" % Test
libraryDependencies += "org.postgresql" % "postgresql" % "42.3.1"

addCommandAlias(
  "validateCode",
  "scalafmtSbtCheck; scalafmtCheckAll; uiCodeStyleCheck"
)
