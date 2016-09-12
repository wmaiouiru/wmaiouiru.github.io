import os, sys, shutil

def main(argv):
	print 'moving dist/index.html to index.html'
	src='../dist/index.html'
	dst='../index.html'
	if os.path.isfile(dst):
		os.remove(dst)
	shutil.move(src,dst)

if __name__ == '__main__':
    main(sys.argv[1:])