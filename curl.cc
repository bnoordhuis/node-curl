#include <curl/curl.h>
#include "node.h"

using namespace v8;
using namespace node;

namespace {

void RegisterModule(Handle<Object> target) {

}

} // namespace

NODE_MODULE(curl, RegisterModule);
