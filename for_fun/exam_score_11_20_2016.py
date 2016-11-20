""" For fun exam score printing """
# pylint: disable=C0103

import random
def print_scores(scores):
    """ Prints the scores by 5 entries delimited by tabs """
    for line_index in range(len(scores)/5):
        s_index = (line_index)*5
        e_index = (line_index+1)*5
        line_index += 5
        pp_num_list('', scores[s_index:e_index])
def pp_num_list(head_str, num_list):
    """ Prints list delimited delimited by tabs """
    print head_str+('\t'.join([str(x) for x in num_list]))

exam_scores = [random.randint(50, 100) for i in range(random.randint(45, 90))]

print 'num of exam scores: '+str(len(exam_scores))

print '--------------exam scores list-----------------'
print_scores(exam_scores)
print '-----------------------------------'

exam_scores.sort()
last10_scores = exam_scores[:10]
first10_scores = exam_scores[:-11:-1]

pp_num_list('last10_scores:\t', last10_scores)
pp_num_list('first10_scores:\t', first10_scores)

avg = sum(exam_scores)/len(exam_scores)

pos = (len(exam_scores)+1)/2
median = (exam_scores[pos-1]+(exam_scores[-pos]))/2
print 'average exam score: '+str(avg)
print 'median exam score: '+str(median)
