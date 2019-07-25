def add_to_each_line():
	newf=""
	with open('esdata.json','r') as f:
		for line in f:
			newf+=line.strip()+",\n"
		f.close()
	with open('esdata.json','w') as f:
		f.write(newf)
		f.close()