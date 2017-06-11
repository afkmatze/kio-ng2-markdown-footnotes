#!/usr/bin/env bash

SCRIPT_PATH="$(dirname "${0}")"
SCRIPT_FILE="$(basename "${0}")"
_ROOT="$(cd "$(dirname "${0}")/.."; pwd)"
RELEASES_ROOT="$(cd "$(dirname "${0}")/../.."; pwd)"
TEST_PROJECT_ROOT="${RELEASES_ROOT}/test-project"

KIO_MODULE_NAME="$(basename "${_ROOT}")"

function init() {
  if [[ ! -d "${TEST_PROJECT_ROOT}" ]]; then
    cd "${RELEASES_ROOT}"
    ng new "$(basename "${TEST_PROJECT_ROOT}")"
    cd "${TEST_PROJECT_ROOT}"
    npm i
  fi

}


function link_module () {
  local module_name="${1}"
  local module_root="${RELEASES_ROOT}/${module_name}"

  cd "${TEST_PROJECT_ROOT}"
  npm i "git+ssh://git@dergoldenefoehn.de:/opt/git/${module_name}.git" --save

  cd "${TEST_PROJECT_ROOT}/node_modules/${module_name}"
  rm -rf release src
  ln -s "${module_root}/release"
  ln -s "${module_root}/src"
}


function compile_test_app () {
  cd "${TEST_PROJECT_ROOT}"
  ./node_modules/.bin/ngc
}


init

case "${1}" in
  link )
    link_module "${KIO_MODULE_NAME}";;

  start )
    cd "${TEST_PROJECT_ROOT}"
    npm start;;


  compile )
    compile_test_app;;
esac

