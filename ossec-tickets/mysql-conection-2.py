#!/usr/bin/python
# -*- coding: utf-8 -*-

import MySQLdb as mdb
import sys
import json
import collections

try:
    con = mdb.connect('localhost', 'sajid', 'qazwsx', 'db1');

    cur = con.cursor()
    
    cur.execute("select version()")
    ver = cur.fetchone()    
    print "Database version : %s " % ver
    
    
    cur.execute("select * from table03")
    
    print ("\nTotal of rows {0}".format(cur.rowcount))
    
    allrows = cur.fetchall()    
    print("\n one way to print ")
    print ("All rows are : {0}".format(allrows))
    
#mysql> select * from table03;
#+------+------+------+
#| a    | b    | c    |
#+------+------+------+
#|    1 |    2 |    8 |
#|    2 |    4 |    9 |
#|    3 |    6 |   10 |
#|    4 |    8 |   11 |
#|    5 |   10 |   12 |
#|    6 |   12 |   13 |
#|    7 |   14 |   14 |
#+------+------+------+

    print("\nAnother way to print : ")
    for row in allrows:
        print row
    
    
    print("\nprinting  chosen columns  : ")
    cur.execute("select * from table03")
    print("\n using for :")    
    for i in range(cur.rowcount):
        therow = cur.fetchone()
        #print ("{0}".format(therow[0]))
        print therow[0], therow[1]
        
        
    ###   JSON  ---------------------------------------------------
    
    cur.execute("select * from table03")
    columns = [desc[0] for desc in cur.description]
    result = []    
    rows = cur.fetchall()
    
    for row in rows:
        #row = dict (c,v for zip( columns, row))
        d = collections.OrderedDict()
        d['a'] = row[0]
        d['b'] = row[1]
        d['c'] = row[2]
        #t = (row[0], row[1], row[2])        
        result.append(d)
    
      
    print("\nJSON :")
    j = json.dumps(result)
    print("{0}".format(j))
    
    ## ---------------------------------------------------------------
    
    
except mdb.Error, e:
  
    print "Error %d: %s" % (e.args[0],e.args[1])
    sys.exit(1)
    
finally:    
        
    if con:    
        con.close()