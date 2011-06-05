#!/usr/bin/env python

def set_options(ctx):
	ctx.tool_options('compiler_cxx')

def configure(ctx):
	ctx.check_tool('compiler_cxx')
	ctx.check_tool('node_addon')
	ctx.env['CPPFLAGS'] += '-Wall -Wextra -g -O0'.split()
	ctx.env['LINKFLAGS'] += '-lcurl'.split()

def build(ctx):
	t = ctx.new_task_gen('cxx', 'shlib', 'node_addon')
	t.target = 'curl'
	t.source = 'curl.cc'
